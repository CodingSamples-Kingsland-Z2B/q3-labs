
fetch('http://localhost:4500/api/cubes', {
  headers:{
    "Content-Type":"application/json"
  }
}).then(res=>{
  return res.json()
}).then(result=>{
    console.log(result)
})