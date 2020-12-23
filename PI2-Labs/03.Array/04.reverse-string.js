// Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements.

function main(inputArr) {
    for (let startIndex = 0; startIndex < inputArr.length / 2; startIndex++) {
        let endIndex = inputArr.length - 1 - startIndex;
        swap(inputArr, startIndex, endIndex);
    }

    console.log(inputArr.join(' '));

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

main(['a', 'b', 'c', 'd', 'e']);
// main(['abc', 'def', 'hig', 'klm', 'nop']);
// main(['33', '123', '0', 'dd']);