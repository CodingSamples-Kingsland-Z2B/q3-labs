const bcrypt = require('bcryptjs');

const salt = 8;

// bcrypt.hash('Password 12345',salt).then(hash=>{
//   console.log(hash);
// }).catch(err=>{
//   console.log(err);
// })


bcrypt.compare('Password 12345', '$2a$08$uJM6p0avp66WEFBp6fExfOVA.u8m5xQSjCvhyc5Pf4Ov6Trcr21c1').then(match=>{
  console.log(match)

}).catch(err=>console.log(err))