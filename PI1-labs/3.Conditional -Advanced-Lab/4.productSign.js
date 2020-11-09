function main(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("Zero");
    } else {
        let negativeCount = 0;
        if (num1 < 0) negativeCount++;
        if (num2 < 0) negativeCount++;
        if (num3 < 0) negativeCount++;

        if (negativeCount % 2 === 0) {
            console.log("positive");
        } else {
            console.log("negative");
        }
    }
}