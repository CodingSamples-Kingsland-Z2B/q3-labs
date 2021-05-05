document.addEventListener('DOMContentLoaded', main)

const kinvey = new Kinvey('kid_BkYBymjvd', 'ed0eed3599fa4d5d9d062fae8755f43c');

const data = {
    username: 'guest',
    password: 'guest'
}

const newPost = {
    title: "Post edited by Alfred",
    body: "This post was edited"
}

async function main() {
    const authToken = await kinvey.login(data);
    console.log(authToken)
    const res = await kinvey.logout(authToken);
    console.log(res)
}