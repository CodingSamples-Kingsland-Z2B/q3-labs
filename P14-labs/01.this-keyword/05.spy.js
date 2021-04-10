function main() {
    return Spy;
}

function Spy(obj, method) {

    const originalMethod = obj[method];
    let result = {
        count: 0
    }

    obj[method] = function() {
        result.count++;
        return originalMethod.apply(this, arguments)
    }

    return result;
}


let spy = main()(console, "log");
console.log(spy); //{count:1 }
console.log(spy); //{count:2}
console.log(spy); //{count:3}