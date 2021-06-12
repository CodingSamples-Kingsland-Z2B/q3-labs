const express = require('express');
const router = express.Router();



router.get('/', (req, res, next)=>{
  res.send('<h1>Home Page</h1>')
})

router.get('/about', (req, res, next)=>{
  res.send(`<h1>About Page</h1>`)
})

router.get('/product/:prodId', (req, res)=>{

  res.send(`Product ${req.params.prodId}`);
})


router.use((req, res, next)=>{
  res.send(`<h1>404: Page not exist</h1>`)
})


module.exports = router;