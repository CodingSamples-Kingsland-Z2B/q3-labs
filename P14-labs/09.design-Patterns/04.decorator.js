const User = function(name) {
    this.name = name;
    this.access = [{ dashboard: true, edit: false, delete: false }];
    this.role = 'user';
}

const Admin = function(user) {
    this.name = user.name;
    this.access = [{ dashboard: true, edit: true, delete: true }];
    this.role = 'Admin';
}

function main() {
    let user = new User('John');
    console.log(user);
    let admin = new Admin(user);
    console.log(admin);
}

main();