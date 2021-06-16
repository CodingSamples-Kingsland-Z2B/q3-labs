const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
  title: {
    type:String, 
    required:true, 
    maxLength: 50, 
    minLength:2
  }, 
  likes: {
    type:Number, 
    default:0,
    max:5000
  }, 
  date: Date, 
  body: String, 
  author: {
    type: schema.Types.ObjectId, 
    ref:'User'
  }
})

postSchema.methods.getSummary= function(){
  console.log(`Title: ${this.title} Date ${this.date}`)
}

postSchema.path('body').validate(function(){
  return this.body.length>=2 && this.body.length<=10
}, 'Body must be 2 to 10 characters')



module.exports = mongoose.model('Post', postSchema)