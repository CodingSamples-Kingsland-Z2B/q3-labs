const fs = require('fs');
const Cube = require('../models/Cube')
const json2csv = require('json2csv');
const { assert } = require('console');

let options = [
  {level:1, desc:'1 - Very Easy', selected:false },
  {level:2, desc:'2 - Easy', selected:false },
  {level:3, desc:'3 - Medium (Standard 3x3)', selected:false },
  {level:4, desc:'4 - Intermediate', selected:false },
  {level:5, desc:'5 - Expert', selected:false },
  {level:6, desc:'6 - Hardcore', selected:false },
]


exports.getHome = (req, res)=>{

  Cube.find({}).then((cubes)=>{
    // Copy the cubes
    const cubesCopy = [...cubes];

   // Search mode
   if(req.query.search){

    cubes = cubes.filter(cube => cube.name.toLowerCase().includes(req.query.search.toLowerCase()))

    if(req.query.from){
      cubes = cubes.filter(cube => cube.level >= req.query.from)
    }

    if(req.query.to){
      cubes = cubes.filter(cube=> cube.level <=req.query.to)
    }

    if(cubes.length==0){
      cubes = cubesCopy
    }
   }

    // render it  
    res.render('index.hbs', {docTitle:'Home Page', cubes});
  })
}



exports.getAbout = (req, res)=>{
  res.render('about.hbs', {docTitle:'About Us'});
}

exports.getCreate = (req, res)=>{
 // set all selection to false 
  options = options.map(opt => ({...opt, selected:false}))
  res.render('create.hbs', {docTitle:'Create a Cube', options});
}

exports.postCreate = (req, res)=>{

  const formData = req.body;

  // const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg)\??.*$/gmi;
  // // validation 
  // if(!formData.name)
  //   return console.log('No name');
  // else if(!formData.description || formData.description.length>=200)
  //   return console.log('No Desc / desc too long ')
  // else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl))
  //   return console.log('No Image / Invalid Image url ')
  // else if(!formData.level || formData.level <1 || formData.level>6)
  //   return console.log('Diffeculy level is required 1-6');

  formData.creatorId = req.user._id.toString();

  const cube = new Cube(formData);
  cube.save().then(()=>{
      console.log('Cube stored in Database');
      req.flash('success', 'Cube created successfully !')
      res.redirect('/');
  }).catch(err=> console.log(err));
  
}

exports.getDetails = (req, res, next)=>{
  const id = req.params.cubeId;

  Cube.findById(id).populate('accessories').then(cube=>{

    let owner = false;

    // If a user is logged in 
    if(req.user){
        owner = req.user._id.toString() === cube.creatorId
    }

    res.render('details.hbs', {docTitle:`Details | ${id}`, cube, accessories:cube.accessories , owner})
  }).catch(error=>{
      next(error)
  })
}

exports.getExport= (req, res)=>{

  Cube.find({}).then(cubes=>{
    const fields = ['name', 'description', 'imageUrl', 'level']
    const csv = json2csv.parse(cubes,{fields:fields} )
    res.attachment('List.csv')
    res.status(200).send(csv)

  })
}


exports.getEdit = (req, res)=>{
  const cubeId = req.params.cubeId;

  Cube.findById(cubeId).then((cube)=>{

    // set all selection to false 
    options = options.map(opt => ({...opt, selected:false}))

    // its index 
    let index = options.findIndex(opt=> opt.level == cube.level)
    options[index].selected = true;
    res.render('create.hbs', {docTitle:'Edit Cube', cube, options, editMode: true})

  })
  .catch(err=> console.log(err))
}

exports.postEdit = async(req, res)=>{

  // 1. get the id from the url (req.params)
  const cubeId = req.params.cubeId;
  // 2.search my db for that specific cube
  const cube = await Cube.findById(cubeId)

  // 3.update its data 
  cube.name = req.body.name; 
  cube.description = req.body.description; 
  cube.level = req.body.level; 
  cube.imageUrl = req.body.imageUrl;

  // 4.save it back to db
  await cube.save(); 
  req.flash('success', 'Cube edited successfully')
  res.redirect('/');
  // 5.redirect the user to home page 
  
}


exports.getDelete = async(req, res)=>{
  const cubeId = req.params.cubeId;

    const cube = await Cube.findById(cubeId)

    // set all selection to false 
    options = options.map(opt => ({...opt, selected:false}))

    // its index 
    let index = options.findIndex(opt=> opt.level == cube.level)
    options[index].selected = true;
    res.render('delete.hbs', {docTitle:'Delete Cube', cube, options})

}

exports.postDelete = async(req, res)=>{
  const cubeId = req.params.cubeId;

  await Cube.findByIdAndDelete(cubeId);
  req.flash('success', 'Cube deleted successfully !')
  res.redirect('/')
}