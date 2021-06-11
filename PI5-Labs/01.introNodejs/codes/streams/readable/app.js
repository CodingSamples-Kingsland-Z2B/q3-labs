const http = require('http');

const server = http.createServer((req, res)=>{

  if(req.url==='/' && req.method ==='GET' ){
    
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`<form action="/submit" method="POST">
      <input type="text" name="todo">
      <button type="submit">ADD</button>
    </form>`)

    res.end()
  }

  if (req.url==='/submit' && req.method=='POST'){

    let todo;
    let body = '';

    req.on('data', chunk=> {
      body+=chunk
    })

    req.on('end', ()=>{
      todo = body.split('=')[1];
      console.log(todo)
      res.end('Form submited')
    })

    req.on('error', (err)=>{
        console.log(err)
    });
  }
})

server.listen(3000)