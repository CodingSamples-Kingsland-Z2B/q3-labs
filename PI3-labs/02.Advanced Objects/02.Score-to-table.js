function main(json) {

    let scoreArr = JSON.parse(json);
    let output = `<table>\n`;
    output += `  <tr><th>name</th><th>score</th></tr>\n`;

    scoreArr.forEach(element => {
        output += `  <tr><td>${element.name}</td><td>${element.score}</td></tr>\n`;
    });

    output += `</table>`;

    output = output.replace(/[&]/g, '&amp;');
    console.log(output);

}

main(['[{"name":"Peter & Kiro", "score": 479 }, { "name": "George, Maria & Viki", "score": 205 }]'])