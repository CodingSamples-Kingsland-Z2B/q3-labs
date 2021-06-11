const fs = require('fs');


let filePath = __dirname+'/data.txt';

fs.unlink(filePath, err=> {
  if(err){
    console.log(err)
  }
})


