const http = require('http');
const url = require('url');

const port = 3000
const handler = (req, res)=>{
  let path = url.parse(req.url).pathname;

  if( path ==='/'){

    res.end(`<h1> Home Page</h1>`)
  
  
  }else if(req.url==='/about'){
    // res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Authorization', 'Auth')

    // res.writeHead( 200,{'Content-Type':'text/html', 'Authorization':'Auth'} )
    res.write(`<h1> About Page</h1>`);
    res.end()
  }
  else if (req.url ==='/contact'){
    res.write(`<h1> contact Page</h1>`);
    res.end()
  }


 
}



const server = http.createServer(handler)

server.listen(port, ()=>{
  console.log(`Server is running on port : ${port}`)
})


