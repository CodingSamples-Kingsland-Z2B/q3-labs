const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring')

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;
    if (pathname === '/' && req.method === 'GET') {
        let filePath = path.join(__dirname, '../views/home/index.html');

        // Extracting the url query 
        let {query}= url.parse(req.url, true)

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.write('404: cannot read file');
                res.end();
                return;
            }
            

            fs.readFile('./data/cats.json', 'utf-8', (err, catsData)=>{
                if(err) throw err;

                catsData = JSON.parse(catsData);

                let modifiedCats;

                if(query.search){
                    // search mode
                    catsData = catsData.filter(cat=> cat.name.toLowerCase().includes(query.search.toLowerCase()) 
                    || cat.breed.toLowerCase().includes(query.search.toLowerCase()))
                    console.log(catsData)
                    if(catsData.length==0){
                        modifiedCats = `<p> No cats found</p>`
                        modifiedData = data.toString().replace('{{cats}}', modifiedCats)
                        res.writeHead(200, { 'Content-Type': 'text/html' })
                        res.write(modifiedData);
                        res.end();

                        return;
                    }
              
                }

                // Home page 
                modifiedCats = catsData.map(cat =>
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
              
        })

    } else {
        return true
    }

}