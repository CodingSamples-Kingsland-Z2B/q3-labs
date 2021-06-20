const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');


exports.getAttach = async (req, res) => {
  // 1. find the cube that we want to attach an accessory to it
  // 2. get all accessories
  // 3. return the accessories that not already attached to that cube

  try {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories');
    const accessories = await Accessory.find({}).where('_id').nin(cube.accessories);
    res.render('attachAccessory.hbs', { cube, accessories });
  } catch (err) {
    console.log(err);
  }

  // Cube.findById(req.params.cubeId).populate('accessories').then((cube)=>{
  // Accessory.find({}).where('_id').nin(cube.accessories).then((accessories)=>{
  //   res.render('attachAccessory.hbs',{cube, accessories})
  // })
  // })
};

exports.getCreate = (req, res) => {
  res.render('createAccessory.hbs', { docTitle: 'Create Accessory' });
};

exports.postCreate = (req,res)=>{

  const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg)\??.*$/gmi;
  let formData = req.body;

  // Validation 
  if(!formData.name){
    return console.log('No name');
  }else if(!formData.description || formData.description.length>200)
    return console.log('No desc/ description too long');
  else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl))
   return console.log('No Image/ invalid Image Url');


  //  Store the accessory 
  const accessory = new Accessory(formData);
  accessory.save().then(()=>{
    res.redirect('/');
  })

}


exports.postAttach = async(req, res)=>{
 
  // get the cube we want to attach the accessory to it 
  const cube = await Cube.findById(req.params.cubeId)
  // get its accessories 
  // add the new accessory to them 
  //  save the cube to the db 
  cube.accessories.push(req.body.accessory)
  await cube.save();
  // store the cube id to the accessory selected 

  let accessory = await Accessory.findById(req.body.accessory)

  accessory.Cubes.push(req.params.cubeId);
  await accessory.save();

  //  redirect the user to the details page 
  res.redirect(`/details/${req.params.cubeId}`)
}