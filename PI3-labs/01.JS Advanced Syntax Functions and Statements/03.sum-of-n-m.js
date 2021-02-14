function main(n, m) {

    // Converting n, m inputs from string to numbers 
    n = Number(n);
    m = Number(m);


    let result = 0; // initial value

    for (let i = n; i <= m; i++) {
        result += i;
    }

    console.log(result);
}

main('1', '5')