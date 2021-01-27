let names = ['john', 'tom', 'sally'];

// let output = [];

// for (let i = 0; i < names.length; i++) {

//     output.push(names[i].toUpperCase)
// }

let output = names.map((item) => item.toUpperCase());

let products = [{ name: 'TV', price: 129 }, { name: 'radio', price: 45.99 }, { name: 'alarm', price: 15.99 }];
let pricesArr = products.map(item => item.price);
let namesArr = products.map(item => item.name);
let cheapPrices = products.filter(item => item.price > 100);

let tv = products.find(item => item.name === 'TV');


console.log(pricesArr);
console.log(namesArr);
console.log(cheapPrices);
console.log(tv);