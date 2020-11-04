/* 
Write a function for checking a password, which: 
    ● Receives a string that holds a password
    ● Prints "Welcome" if the password is "s3cr3t!"
    ● Prints "Wrong password!" in all other cases

*/
function main(password){
    let realPassword = "s3cr3t!";
    if( password === realPassword){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}
main("s3cr3t!");
main("qwerty");