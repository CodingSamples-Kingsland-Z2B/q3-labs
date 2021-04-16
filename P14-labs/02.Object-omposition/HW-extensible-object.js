function main() {
    let parent = {
        name: 'Kingsland',
        extend(obj) {
            Object.keys(obj).forEach(key => {
                this[key] = obj[key];
            })
        }
    }

    let newObject = {
        name: 'university',
        extensionMethod: 'world',
        extensionProperty: 'someString'
    }

    return {
        parent,
        newObject
    }
}

let m = main();

m.parent.extend(m.newObject);
console.log(m.parent);