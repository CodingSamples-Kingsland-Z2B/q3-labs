// const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'This is an example text')

// URL Module 

const url = require('url');
const qs = require('querystring');

const myWebsite = 'https://www.mywebsite.com/test?q=search&page_size=5&apikey=12345';

let urlObj = url.parse(myWebsite);
let qsObj = qs.parse(urlObj.query)
console.log(qsObj.apikey);