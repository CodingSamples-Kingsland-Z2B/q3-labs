class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null
    }


    send(msg, to) {
        this.chatroom.send(msg, this, to);
    }

    receive(msg, from) {
        console.log(`${from.name} to ${this.name} : ${msg}`)
    }
}

const Chatroom = function() {
    let users = {};
    return {
        register: function(user) {
            users[user.name] = user;
            // {Mike : User {name:'Mike' chatroom: null}}
            user.chatroom = this
        },
        send: function(msg, from, to) {
            if (to) {
                to.receive(msg, from)
            } else {
                // Broadcast message 
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].receive(msg, from)
                    }
                }
            }
        }
    }
}

const mike = new User('Mike');
const john = new User('John');
const susan = new User('Nancy');

const chatroom = new Chatroom();

chatroom.register(mike);
console.log(mike)
chatroom.register(john);
chatroom.register(susan);

mike.send('Hello John', john);
mike.send('Hello Everyone !!');