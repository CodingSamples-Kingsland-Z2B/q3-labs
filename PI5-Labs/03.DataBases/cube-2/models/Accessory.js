const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Cube = require('./Cube')

const accessorySchema = schema({
  name: {
    type:String, 
    required:true,
  }, 
  description:{
    type:String, 
    required:true,
    maxlength:20
  }, 
  imageUrl:{
    type:String, 
    required:true, 
  }, 
  Cubes:[{
    type: schema.Types.ObjectId, 
    ref:'Cube'
  }]
})


accessorySchema.path('imageUrl').validate(function(){
  let pattern = /^http(s)?\:\/\/.*/i;
  return pattern.test(this.imageUrl)
}, 'Must be a correct url')

module.exports = mongoose.model('Accessory', accessorySchema)