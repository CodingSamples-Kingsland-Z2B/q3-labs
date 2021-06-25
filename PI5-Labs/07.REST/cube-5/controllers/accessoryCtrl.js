const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');




exports.create = (req,res)=>{
  console.log(req.file)
  let formData = req.body;

  // Validation 
  if(!formData.name){
    return console.log('No name');
  }else if(!formData.description || formData.description.length>200)
    return console.log('No desc/ description too long');


   let image = req.file
   console.log(image);
   // check if the user submitting an image or not
   if(!image){
       image = {path:'images/no-image.jpg'}
   } 

   formData.imageUrl = image.path;
  //  Store the accessory 
  const accessory = new Accessory(formData);
  accessory.save().then(()=>{
    res.redirect('/');
  })

}


exports.attach = async(req, res)=>{
 
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