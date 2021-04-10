function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function main(area, vol, input) {

    // pare the string to array 
    let shapesArr = JSON.parse(input);

    let result = shapesArr.map(shape => ({
        area: area.call(shape),
        volume: vol.call(shape)
    }));

    console.log(result)

}


main(area, vol, '[ { "x": "1", "y": "2", "z": "10" }, { "x": "7", "y": "7", "z": "10" }, { "x": "5", "y": "2", "z": "10" }]');