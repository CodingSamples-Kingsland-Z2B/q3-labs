const fs = require('fs');
const Cube = require('../models/Cube')
const json2csv = require('json2csv');

const options = [
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
  res.render('create.hbs', {docTitle:'Create a Cube', options});
}

exports.postCreate = (req, res)=>{

  const formData = req.body;

  const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg)\??.*$/gmi;
  // validation 
  if(!formData.name)
    return console.log('No name');
  else if(!formData.description || formData.description.length>=200)
    return console.log('No Desc / desc too long ')
  else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl))
    return console.log('No Image / Invalid Image url ')
  else if(!formData.level || formData.level <1 || formData.level>6)
    return console.log('Diffeculy level is required 1-6');

  const cube = new Cube(formData);
  cube.save().then(()=>{
      console.log('Cube stored in Database');
      res.redirect('/');
  }).catch(err=> console.log(err));
  
}

exports.getDetails = (req, res)=>{
  const id = req.params.cubeId;
  Cube.findById(id).populate('accessories').then(cube=>{
    console.log(cube)
    res.render('details.hbs', {docTitle:`Details | ${id}`, cube, accessories:cube.accessories })
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




