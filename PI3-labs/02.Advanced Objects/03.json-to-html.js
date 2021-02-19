function main(json) {

    let arr = JSON.parse(json);
    let keys = Object.keys(arr[0]);
    let output = `<table>\n`;
    output += `  <tr>`;
    keys.forEach(key => {
        output += `<th>${key}</th>`
    });
    output += '</tr>\n';

    // For every object in the array 
    arr.forEach(el => {
        output += `  <tr>`;
        let values = Object.values(el);
        // For every value in the object
        values.forEach(value => {
            if (typeof(value) === 'string') {
                value = encodeURIComponent(value);
            }
            output += `<td>${value}</td>`;
        });
        output += '</tr>\n';
    })
    output += `</table>`;
    console.log(output);
}

main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])