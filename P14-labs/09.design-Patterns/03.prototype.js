//  constructing Function 
function User(username, password) {
    this.username = username;
    this.password = password;
}


function CreatePrototype(proto) {
    this.proto = proto;
    this.clone = function() {
        let user = new User();
        user.password = proto.password;
        user.username = proto.username;
        return user;
    }
}


function main() {
    let proto = new User('John', '12345') //prototype;
    let prototype = new CreatePrototype(proto);
    let user1 = prototype.clone();
    let user2 = prototype.clone();
    console.log(user1, user2)
}

main();