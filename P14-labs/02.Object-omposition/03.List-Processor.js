function main(input) {

    let list = [];

    const commandProcessor = (function() {
        const add = newItem => list.push(newItem);
        const remove = item => list = list.filter(el => el !== item);
        const print = () => console.log(list.join(','));
        return { add, remove, print }
    })();


    input.forEach(command => {
        let [cmdName, arg] = command.split(' ');
        commandProcessor[cmdName](arg)
    })

}

main(['add hello', 'add again', 'remove hello', 'add again ', 'print '])