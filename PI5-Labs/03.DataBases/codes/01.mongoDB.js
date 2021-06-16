const {MongoClient} = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';

const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });

const connect = async()=>{
  await client.connect();
}

const add = async(data)=>{
  const db = client.db('Kingsland')
  const people = db.collection('people');
  await people.insert(data)
  let result = await people.find().toArray()
  console.log(result);
}

connect()
add({name:'John'});