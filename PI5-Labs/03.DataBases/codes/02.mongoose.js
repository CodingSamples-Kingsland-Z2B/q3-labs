const mongoose = require('mongoose');
const Post = require('./models/Post');

const dbUrl = 'mongodb+srv://alfred:alfred00@cluster0.efrmq.mongodb.net/myblog';

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => console.log(err));

const mypost = {
  title: 'My Post4',
  likes: 5,
  body: 'blah blab blah blab blah blab blah blab blah blab blah blab blah blab blah blab',
  date: new Date('2015-11-12'),
};

Post.find({ title: mypost.title }).populate('author').then((post) => {
 
  console.log(post.author.name)  //123456
  if (post.length !==0) {
    console.log('Document exist');
    return;
  }

  const newPost = new Post(mypost);
  newPost.getSummary();
  newPost.save().then((post) => {
    console.log(post);
  });
});
