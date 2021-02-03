function main(arr) {
    let pattern = /\bU\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}[0-9]+)P@\$/gm;
    let count = 0;
    let num = arr.shift();


    arr.forEach(regestiration => {
        let match = pattern.exec(regestiration);
        if (match) {
            count++;
            console.log("Registration was successful");
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`)

        } else {
            console.log("Invalid username or password")
        }
    });

    console.log(`Successful registrations: ${count}`);
}

main([2,
    `U$TommyU$P@$asdqwe123P@$`,
    `Sara 1232412`
]);