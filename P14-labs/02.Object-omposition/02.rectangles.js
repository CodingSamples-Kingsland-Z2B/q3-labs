function main(input) {

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area() {
                return this.width * this.height;
            },
            compareTo(other) {
                return this.area() - other.area() || this.width - other.width;
            }
        }
        return rect
    }


    // Loop through the input array 
    // let output = [];
    // for (let [width, height] of input) {
    //     // const [width, height] = arr;
    //     output.push(createRect(width, height));
    // }
    // output.sort((a, b) => b.compareTo(a));
    // console.log(rects);


    let rects = input.map(([width, height]) => createRect(width, height))
        .sort((a, b) => b.compareTo(a));
    console.log(rects);

}


main([
    [10, 5],
    [5, 12]
])