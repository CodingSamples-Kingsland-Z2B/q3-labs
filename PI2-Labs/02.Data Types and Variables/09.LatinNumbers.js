function main(n) {
    for (let l1 = 0; l1 < n; l1++) {
        let letter1 = String.fromCharCode(97 + l1);
        for (let l2 = 0; l2 < n; l2++) {
            let letter2 = String.fromCharCode(97 + l2);
            for (let l3 = 0; l3 < n; l3++) {
                let letter3 = String.fromCharCode(97 + l3);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

main(3);