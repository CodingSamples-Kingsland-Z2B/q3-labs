exports.getHome = (req, res)=>{
  console.log(process.argv)
  res.render('../views/index.hbs');
}


exports.getAbout = (req, res)=>{
  res.render('../views/about.hbs');
}

exports.getCreate = (req, res)=>{
  res.render('../views/create.hbs');
}





