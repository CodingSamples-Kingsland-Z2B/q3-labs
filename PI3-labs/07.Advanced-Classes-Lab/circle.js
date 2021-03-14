class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(r) {
        this._radius = r;
    }
}


let c = new Circle(3);
console.log(c.radius);

c.radius = 6;
console.log(c.radius)