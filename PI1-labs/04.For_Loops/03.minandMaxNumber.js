function main(n,nums){
    let maxNum = -Infinity;
    let minNum = Infinity;

    for(let i=0;i<n;i++){
        let num2Check = nums.shift();
        if(num2Check>maxNum){
            maxNum = num2Check;
        }
        if(num2Check<minNum){
            minNum= num2Check;
        }
    }
    console.log(`Min number: ${minNum}`);
    console.log(`Max number: ${maxNum}`);
}
main(3,[10,350,50]);