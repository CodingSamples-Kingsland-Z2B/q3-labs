function main() {
    let lib = (function() {

        let sayHello = (msg) => {
            console.log(msg)
        }

        let sayHi = (msg) => {
            console.log(msg);
        }

        return {
            hello: sayHello,
            hi: sayHi
        }


    }());

    return lib;
}

let myLib = main();
myLib.hello('Hello there');