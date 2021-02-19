function main(arr) {

    // empty output array;
    let output = [];

    // getrid of the table title 
    arr.shift();

    // Looping through the data
    arr.forEach(town => {
        // remove the pipes in town data
        let townInfo = town.replace(/[|]\s?/g, '').trim();
        // get the townIno in variables 
        let [name, lat, long] = townInfo.split(' ');

        // Created a town object 
        let obj = {
            Town: name,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(long).toFixed(2))
        };

        output.push(obj)
    })

    console.log(JSON.stringify(output));

}

main(['| Town | Latitude | Longitude |',
    '| Melbourne |-37.840935 | 144.946457|',
    '| Beijing | 39.913818 | 116.363625 |'
])