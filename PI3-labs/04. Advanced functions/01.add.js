function main(num) {
    // return x => x + num;
    return function(x) {
        return x + num;
    };

}

// let a = main(5);
// console.log(a(2));
// console.log(a(3));