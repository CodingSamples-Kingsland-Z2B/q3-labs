const express = require('express');
const route = express.Router();
const path = require('path')

route.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../views/addForm.html'));
})

route.post('/', (req, res)=>{
  console.log(req.body.username)
  console.log(req.body.age)
})


module.exports = route