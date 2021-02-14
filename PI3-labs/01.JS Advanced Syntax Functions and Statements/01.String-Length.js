function main(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}

main('pasta', '5', '22.3');