const http = require('http');
const fs = require('fs');
const formidable = require('formidable');


const server = http.createServer((req, res)=>{

  if(req.url==='/' && req.method ==='GET' ){
    const src = fs.createReadStream('./form.html');
    res.writeHead(200, {'Content-Type':'text/html'})
    // src.on('data', data=> res.write(data+'!'));
    // src.on('end', ()=> res.end());
    src.pipe(res);
  }

  if (req.url==='/submit' && req.method=='POST'){

 
    const form = new formidable.IncomingForm();
    
    form.parse(req, (error, fields, files)=>{
      if(error){
        console.log(error);
        return;
      }

      let oldPath = files.upload.path;
      let newPath = __dirname+'/images/'+files.upload.name

      fs.rename(oldPath, newPath, (err)=>{
        if(err){
          console.log(err);
        }

        res.write('File Uploaded Successfully !');
        res.end();
      })

      
    })
    // let todo;
    // let body = '';

    // req.on('data', chunk=> {
    //   body+=chunk
    // })

    // req.on('end', ()=>{
    //   todo = body.split('=')[1];
    //   console.log(todo)
    //   res.end('Form submited')
    // })

    // req.on('error', (err)=>{
    //     console.log(err)
    // });
  }
})

server.listen(3000)



// const fs = require('fs');
// const archiver = require('archiver');


// // Input
// let read = fs.createReadStream('./form.html');
// // Output 
// let output = fs.createWriteStream('./form.html.zip');
// // Transformation 
// const archive = archiver('zip', {
//   zlib: { level: 9 } // Sets the compression level.
// });

// read.pipe(archive).pipe(output)

