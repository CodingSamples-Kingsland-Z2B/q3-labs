// Arrays just list 


class User {

    // let obj = {}
    constructor(userName, password, email, phone) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    checkPassword() {
        if (this.password == '12345') {
            console.log('Access Granted');
        } else {
            console.log('Access Denied ');
        }
    }

}

let user1 = new User('John', '54365', 'j@gmail.com', 123344);
let user2 = new User('mike', '12345', 'm@gmail.com', 123344);

// console.table(user1);
// console.log(user1);





// let user = {
//     userName: 'Alan2020',
//     password: '123#@123',
//     email: 'alan@gmail.com',
//     phone: 510000000
// }


// Access Object 
// console.log(user.phone);

// Update 
// user.phone = 1234568854;

// console.log(user.phone);