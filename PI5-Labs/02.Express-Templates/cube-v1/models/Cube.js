const cubes = require('../db/database.json');
const fs = require('fs');
const uniqueid = require('uniqid');

class Cube{
  constructor(name, description, image, level){
    this.id = uniqueid();
    this.name = name; 
    this.description = description; 
    this.image = image; 
    this.level = level
  }

  save(){

    return new Promise((resolve, reject)=>{
      cubes.push(this)
      fs.writeFile('./db/database.json', JSON.stringify(cubes), err=>{
        if(err) reject(err)
        resolve('Cube Added Successfully !!')
      })
    })
  }


  static findById(id){
    return new Promise((resolve, reject)=>{
      const cube = cubes.find(c=>c.id==id)
      if(cube) resolve(cube)
      else reject('No cube found')
    })
  }

}