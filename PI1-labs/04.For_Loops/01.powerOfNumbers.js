function main(n,p){
    let pow = 1;
    for(let i = 0; i < p; i++){
        pow *= n;

    }

    console.log(pow);
}

main(2,5);
main(3,4);
main(2.5,3);