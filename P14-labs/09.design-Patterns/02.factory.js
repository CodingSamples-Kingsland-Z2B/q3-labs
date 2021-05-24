function UserFactory() {
    this.createUser = function(username, password) {
        let user = {};
        user.username = username;
        user.password = password;
        return user;
    }
}

function main() {
    let users = [];
    let factory = new UserFactory();
    users.push(factory.createUser('John', '12345'))
    users.push(factory.createUser('sally', '1245'))
    users.push(factory.createUser('Mike', '123'))
    users.push(factory.createUser('James', '12'))

    console.log(users);
}

main();