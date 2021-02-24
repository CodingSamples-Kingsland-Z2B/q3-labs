function main(arr) {

    let output = arr.filter((num, index) => index % 2 == 0).join(' ');
    console.log(output);

}
main(['20', '30', '40'])
    // main(['5', '10'])