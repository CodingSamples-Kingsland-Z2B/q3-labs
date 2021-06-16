const fs = require('fs');
const Cube = require('../models/Cube')

const options = [
  {level:1, desc:'1 - Very Easy', selected:false },
  {level:2, desc:'2 - Easy', selected:false },
  {level:3, desc:'3 - Medium (Standard 3x3)', selected:false },
  {level:4, desc:'4 - Intermediate', selected:false },
  {level:5, desc:'5 - Expert', selected:false },
  {level:6, desc:'6 - Hardcore', selected:false },
]


exports.getHome = (req, res)=>{
  // read database.json 
  fs.readFile('./db/database.json', 'utf-8', (err, cubes)=>{
    // parse it to array 
    cubes = JSON.parse(cubes);

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
  const cube = new Cube(req.body.name, req.body.description, req.body.imageUrl, req.body.level);
  cube.save().then(()=>{
    res.redirect('/');
  })
}

exports.getDetails = (req, res)=>{
  const id = req.params.cubeId;
  Cube.findById(id).then(cube=>{
    res.render('details.hbs', {docTitle:`Details | ${id}`, cube})
  })

}






