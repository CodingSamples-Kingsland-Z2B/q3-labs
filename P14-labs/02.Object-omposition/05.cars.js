function main(inputArr) {

    let carObj = (function() {
        return {
            create(name) {
                this[name] = {}
            },
            createInherit(name, parent) {
                this[name] = Object.create(this[parent]);
            },
            set(name, key, value) {
                this[name][key] = value;
            },
            print(name) {
                let objectToPrint = this[name];
                let parent = Object.getPrototypeOf(objectToPrint);
                parent = Object.entries(parent); // [[key, value], [key, value]]
                objectToPrint = Object.entries(objectToPrint);

                let output = [];
                for (const [key, value] of objectToPrint) {
                    output.push(`${key}:${value}`);
                }
                for (const [key, value] of parent) {
                    output.push(`${key}:${value}`);
                }
                console.log(output.join(', '));
            }
        }
    })()

    inputArr.forEach(cmd => {
        const [command, obj, prop, value] = cmd.split(' ');
        if (command === 'create') {
            // create
            if (value) {
                // create with inheritance
                carObj.createInherit(obj, value);
            } else {
                // create an object 
                carObj.create(obj);
            }
        } else if (command == 'set') {
            //  set 
            carObj.set(obj, prop, value)
        } else {
            // print
            carObj.print(obj)
        }
    })

}

main([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);