const url = require('url');
const fs = require('fs');
const path = require('path');
let cats = require('../data/cats.json');
const qs = require('querystring')

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;
    if (pathname === '/' && req.method === 'GET') {

        let filePath = path.join(__dirname, '../views/home/index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.write('404: cannot read file');
                res.end();
                return;
            }
            
               let  modifiedCats = cats.map(cat =>
                    ` <li>
                    <img src="${'./content/images/'+ cat.image}" alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats/cats-edit/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats/cat-find-new-home/${cat.id}">New Home</a></li>
                    </ul>
                </li>`
    
                )


            modifiedData = data.toString().replace('{{cats}}', modifiedCats.join(''))
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(modifiedData);
            res.end();
        })

    } else {
        return true
    }

}