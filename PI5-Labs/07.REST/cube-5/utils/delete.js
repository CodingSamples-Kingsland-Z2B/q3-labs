const fs = require('fs');

const deleteFile = (filepath)=>{

  fs.unlink(filepath, (err)=>{
    if(err){
      throw err;
    }
  })
}

exports.deleteFile = deleteFile