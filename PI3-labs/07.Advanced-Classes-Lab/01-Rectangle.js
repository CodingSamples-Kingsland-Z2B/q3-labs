// Write a class for a rectangle object. It needs to have a width (Number), height (Number) and color (String)
// properties, which are set from the constructor and a calcArea() method, that calculates and returns the
// rectangle’s area.
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');

console.log(rect.width); //4
console.log(rect.height); //5
console.log(rect.color); //red
console.log(rect.calcArea()); //4*5 =20