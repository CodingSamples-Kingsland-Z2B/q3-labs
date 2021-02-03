class User {
    constructor(name, msgs) {
        this.name = name;
        this.msgs = msgs;
    }
}

function main(arr) {
    let users = [];
    let match;
    let [command, name, message] = arr.shift().split('->');
    while (command !== 'Statistics') {
        switch (command) {
            case 'Add':
                match = users.find(user => user.name === name);
                if (match == -1) {
                    console.log(`${name} is already registered`);
                } else {
                    users.push(new User(name, []));
                }
                break;
            case 'Send':
                match = users.find(user => user.name === name);
                if (!match) {
                    console.log(`${name} is not registered`)
                } else {
                    match.msgs.push(message);
                }
                break;
            case 'Delete':
                users = users.filter(user => user.name !== name);
                break;
        }
        // Get the next command 
        [command, name, message] = arr.shift().split('->');
    }

    users.sort((a, b) => (b.msgs.length - a.msgs.length) || (a.name.localeCompare(b.name)));

    console.log(`Users count: ${users.length}`);
    users.forEach(user => {
        console.log(user.name);
        if (user.msgs.length > 0) {
            user.msgs.forEach(msg => {
                console.log(` - ${msg}`);
            });
        }
    });
}


main([`Add->Mike`,
    `Add->George`,
    `Send->George->Hello World`,
    `Send->George->Some random test mail`,
    `Send->Mike->Hello, do you want to meet up tomorrow?`,
    `Send->George->It would be a pleasure`,
    `Send->Mike->Another random test mail`,
    `Statistics`
])