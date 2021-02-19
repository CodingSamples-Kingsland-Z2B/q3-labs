function main(arr) {

    // empty output array;
    let output = [];

    // getrid of the table title 
    let [nameKey, latKey, longKey] = arr.shift().replace(/[|]\s?/g, '').trim().split(' ');

    // Looping through the data
    arr.forEach(town => {
        // remove the pipes in town data
        let townInfo = town.replace(/[|]\s?/g, '').trim();
        // get the townIno in variables 
        let [name, lat, long] = townInfo.split(' ');

        // Created a town object 
        let obj = {};
        obj[nameKey] = name;
        obj[latKey] = Number(Number(lat).toFixed(2));
        obj[longKey] = Number(Number(long).toFixed(2));

        output.push(obj)
    });

    console.log(JSON.stringify(output));

}

main(['| TownName | Lat | Long |',
    '| Melbourne |-37.840935 | 144.946457|',
    '| Beijing | 39.913818 | 116.363625 |'
]);