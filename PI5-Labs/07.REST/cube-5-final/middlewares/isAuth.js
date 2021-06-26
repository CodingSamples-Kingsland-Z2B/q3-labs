const jwt = require('jsonwebtoken')

exports.isAuth = (req, res, next)=>{

  //  Bearer afasfasfasfasfasfasfasfasfasfasfafafs
  // is there Authorization Header 
  const authHeader = req.get('Authorization');
  
  if(!authHeader){
    const error = new Error('Not authenticated');
    error.statusCode = 401;
    throw error;
  }

 // extract the token from the header
  const token = authHeader.split(' ')[1];

  // verify the token => secret
  
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  }catch(err){
    err.statusCode = 500;
    throw err;
  }

  if(!decodedToken){
    const error = new Error('Not authenticated');
    error.statusCode = 401;
    throw error;
  }
  
  // attach any information to the request 
  req.userId= decodedToken.userId
  next();
}