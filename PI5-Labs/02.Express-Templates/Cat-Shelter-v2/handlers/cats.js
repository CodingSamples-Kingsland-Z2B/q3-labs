const url = require('url');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const cats = require('../data/cats.json')
const breeds = require('../data/breeds.json')


module.exports = (req, res)=>{

  const pathname = url.parse(req.url).pathname;

  console.log(pathname)
  if(pathname==='/cats/add-cat' && req.method ==='GET'){
    // Load the add form 


    let filePath =path.normalize(path.join( __dirname, '../views/addCat.html'))
    const index = fs.createReadStream(filePath);

    index.on('data', (data)=>{
      let catBreedPlaceholder = breeds.map(breed=> `<option value="${breed}"> ${breed}</option>`).join('\n');
      let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder)
      res.write(modifiedData);
      res.end();
    })

    index.on('error', (err)=>{
      console.log(err);
    })

  }else if(pathname==='/cats/add-cat' && req.method ==='POST'){
    // Process adding a cat

    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{

      if(err) throw err;

      let filename;
      if(files.upload.name){
  
        let oldPath = files.upload.path; 
        let newPath = path.normalize(path.join(__dirname, '../content/images/'+ files.upload.name))

        fs.rename(oldPath, newPath, (err)=>{
          if (err) throw err;
          console.log('File was uploaded successfuly');
        })
        filename = files.upload.name
      }else{
        filename = 'no-image.png'
      }
      console.log(fields);

      cats.push({id: Date.now(), ...fields, image:filename})
      let catsJson = JSON.stringify(cats);
      fs.writeFile('./data/cats.json', catsJson, ()=>{
        res.writeHead(301, {location:'/'})
        res.end();
      })

    })

  }else if(pathname==='/cats/add-breed' && req.method==='GET'){

    // Load the add breed form 

    let filePath =path.normalize(path.join( __dirname, '../views/addBreed.html'))
    const index = fs.createReadStream(filePath);

    index.pipe(res);
  }else if(pathname==='/cats/add-breed' && req.method==='POST'){
    // Process adding a breed

    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files)=>{
      if(err) throw err;

      breeds.push(fields.breed);
      let breedsJson = JSON.stringify(breeds);
      fs.writeFile('./data/breeds.json', breedsJson, 'utf-8', ()=>{
        console.log('The breed was added successfully')
      })

      res.writeHead(301, {location:'/'})
      res.end()

    });


  }else if(pathname.includes('/cats-edit') && req.method=='GET'){
    // LOAD THE EDIT PAGE 

    const urlArr = pathname.split('/'); 
    const catId = urlArr[urlArr.length-1];
    let filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));

    let currentCat = cats.find(c=> c.id ==catId)
    const index = fs.createReadStream(filePath);

    index.on('data', (data)=>{

      let modifiedData = data.toString().replace('{{id}}', catId)
      modifiedData = modifiedData.replace('{{name}}', currentCat.name)
      modifiedData = modifiedData.replace('{{description}}', currentCat.description);

      const breedsAsOptions = breeds.map(breed=> {
        console.log(currentCat.breed, breed)
        if(breed=== currentCat.breed){
        
            return `<option value="${breed}" selected> ${breed}</option>`
          }else{
            return `<option value="${breed}"> ${breed}</option>`
          }
      }).join()

      modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions);
      res.write(modifiedData)
      res.end()



    })

  }else if(pathname.includes('/cats-edit') && req.method=='POST'){
    //  PROCESS THE EDIT 
    const urlArr = pathname.split('/'); 
    const catId = urlArr[urlArr.length-1];
    let currentCat = cats.find(c=> c.id ==catId)
    let form = new formidable.IncomingForm();

    let filename; 
    form.parse(req, (err, fields, files)=>{


      if(err) throw err;

      if(files.upload.name){
  
        let oldPath = files.upload.path; 
        let newPath = path.normalize(path.join(__dirname, '../content/images/'+ files.upload.name))

        fs.rename(oldPath, newPath, (err)=>{
          if (err) throw err;
          console.log('File was uploaded successfuly');
        })
        filename = files.upload.name
       }else{
          filename = currentCat.image
        }
        let allCats = cats.filter(cat=> cat.id != catId)

        allCats.push({id:currentCat.id, ...fields, image:filename})
        let catsJson = JSON.stringify(allCats);

        fs.writeFile('./data/cats.json', catsJson, ()=>{
          res.writeHead(301, {location:'/'})
          res.end();
        }) 
        

    })

  }else if(pathname.includes('/cat-find-new-home') && req.method=='GET'){
    // LOAD THE DELETE PAGE 

    const urlArr = pathname.split('/'); 
    const catId = urlArr[urlArr.length-1];
    let filePath = path.normalize(path.join(__dirname, '../views/deleteCat.html'));

    let currentCat = cats.find(c=> c.id ==catId)

    if(currentCat){
      const index = fs.createReadStream(filePath);

      index.on('data', (data)=>{
  
        let modifiedData = data.toString().replace('{{id}}', catId)
        modifiedData = modifiedData.replace('{{name}}', currentCat.name)
        modifiedData = modifiedData.replace('{{alt}}', currentCat.name)
        modifiedData = modifiedData.replace('{{description}}', currentCat.description);
        modifiedData = modifiedData.replace('{{image}}', '/content/images/' +currentCat.image);
        modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);
        res.write(modifiedData)
        res.end()

      })  
    }

  }else if(pathname.includes('/cats/cat-find-new-home') && req.method=='POST'){
    // PROCESS THE DELETE 

    const urlArr = pathname.split('/'); 
    const catId = urlArr[urlArr.length-1];

    fs.readFile('./data/cats.json', 'utf-8', (err, cats)=>{
      if(err) throw err

      cats = JSON.parse(cats);
    
      const updatedCates = cats.filter(cat => cat.id != catId);
      let catsJson = JSON.stringify(updatedCates);
      fs.writeFile('./data/cats.json', catsJson, ()=>{
        res.writeHead(301, {location:'/'})
        res.end();
      })
    })

  }
  else{
    return true
  }

}