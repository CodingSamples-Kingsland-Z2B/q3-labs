function main(inputString) {

    let arr = JSON.parse(inputString);

    // let output = arr.reduce((acc, curr) => ({...acc, ...curr }), {})
    let output = Object.assign({}, ...arr)

    console.log(output);
}

main(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)