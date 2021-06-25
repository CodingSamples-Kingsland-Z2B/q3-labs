const fs = require('fs');
const Cube = require('../models/Cube')
const json2csv = require('json2csv');
const path = require('path');
const pdfDocument = require('pdfkit');
const { deleteFile } = require('../utils/delete');



exports.home = (req, res, next)=>{

  Cube.find({}).then((cubes)=>{
   
   if(req.query.search){
    cubes = cubes.filter(cube => cube.name.toLowerCase().includes(req.query.search.toLowerCase()))
    if(req.query.from){
      cubes = cubes.filter(cube => cube.level >= req.query.from)
    }
    if(req.query.to){
      cubes = cubes.filter(cube=> cube.level <=req.query.to)
    }

    if(cubes.length==0){
        const error = new Error('No cubes found');
        error.statusCode = 404;
        throw error;
    }
   }

   res.status(200).json(cubes);

  }).catch(err=>{

    if(!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  })
}

exports.create = (req, res, next)=>{
  const formData = req.body;

  // validation 
  if(!formData.name){
        const error = new Error('Validation Error: No Name');
        error.statusCode = 404;
        throw error;
  }
    
  else if(!formData.description || formData.description.length>=200){
       const error = new Error('Validation Error: description');
        error.statusCode = 404;
        throw error;

  }
  else if(!formData.level || formData.level <1 || formData.level>6){
         const error = new Error('Validation Error: length');
        error.statusCode = 404;
        throw error;
  }


    let image = req.file
    if(!image){
        image = {path:'images/no-image.jpg'}
    } 

    formData.imageUrl = image.path
    const cube = new Cube(formData);
    cube.save()
    .then((result)=>{

    res.status(201).json({
      message: 'Cube added Successfully !', 
      data: result
    })

  })
  .catch(err=> {
    if(!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  });
  
}

exports.details = (req, res, next)=>{
  const id = req.params.cubeId;

  Cube.findById(id).populate('accessories').then(cube=>{
    res.status(200).json({cube:cube})

  }).catch(err=>{
    if(!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  })
}

exports.export= (req, res, next)=>{

  Cube.find({}).then(cubes=>{
    const fields = ['name', 'description', 'imageUrl', 'level']
    const csv = json2csv.parse(cubes,{fields:fields} )
    res.attachment('List.csv')
    res.status(200).send(csv)
  })
}

exports.edit = async(req, res, next)=>{

  // 1. get the id from the url (req.params)
  const cubeId = req.params.cubeId;

  try{
  // 2.search my db for that specific cube
  const cube = await Cube.findById(cubeId)


  if(req.file){
    deleteFile(cube.imageUrl);
    cube.imageUrl = req.file.path;
  }else{
    cube.imageUrl = cube.imageUrl;
  }
  // 3.update its data 
  cube.name = req.body.name; 
  cube.description = req.body.description; 
  cube.level = req.body.level; 

  // 4.save it back to db
  const updatedCube = await cube.save(); 
  res.status(200).json({message:'Cube Updated', cube: updatedCube})

  }catch(err){

  }

  
}

exports.delete = async(req, res, next)=>{
  const cubeId = req.params.cubeId;

  try{
    const cube = await Cube.findById(cubeId)

    if(!cube){
      const error = new Error('Cube not found with that ID');
      error.statusCode = 404;
      throw error;
    }
  
    deleteFile(cube.imageUrl)
    await Cube.findByIdAndDelete(cubeId);
    res.status(200).json({message:'Cube deleted'})
  
  }catch(err){
    if(!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}


exports.save = async(req, res, next)=>{
  const cubeId = req.params.cubeId;
  const cube = await Cube.findById(cubeId);
  if(!cube){
    return next(new Error('No cube Found'))
  }

  // set the filename and path 
  const cubeName = 'Cube-'+cubeId+'.pdf';
  const cubePath = path.join('data', 'pdfs', cubeName);

  const pdfDoc = new pdfDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline;filename="cube.pdf"');

  pdfDoc.pipe(fs.createWriteStream(cubePath))

  pdfDoc.font('Times-Bold').fontSize(24).fillColor('blue').text(cube.name, {align:'center'})
  pdfDoc.font('Times-Roman').fontSize(14).fillColor('black');
  pdfDoc.moveDown();
  pdfDoc.image(cube.imageUrl, 200, 110, {width:200})
  pdfDoc.moveDown();
  pdfDoc.font('Times-Bold').fontSize(14).text('Description : ', 20, 280, {continued:true}).font('Times-Roman').text(cube.description)
  pdfDoc.moveDown();
  pdfDoc.font('Times-Bold').fontSize(14).text('Level : ' ,{continued:true}).font('Times-Roman').text(cube.level)

  pdfDoc.end();
  pdfDoc.pipe(res);

}