function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', () => {
        fetchOptions('https://blog-apps-c12bf.firebaseio.com/posts/.json')
    })

    document.getElementById('btnViewPost').addEventListener('click', () => {
        const postId = document.getElementById('posts').value
        fetchPost(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}.json`)
    })
}

async function fetchOptions(url) {
    let response = await fetch(url);
    if (!response.ok) {
        return console.log(response)
    }
    // Everything is ok 
    let json = await response.json();
    // Convert the object to an array 
    let resArr = Object.entries(json);
    // Clear the select options because loading new ones;
    document.getElementById('posts').innerHTML = '';
    // Loop throght the posts 
    console.log(resArr);
    resArr.forEach(([postId, { title }]) => {
        // Create option for the select element 
        const option = document.createElement('option');
        option.value = postId;
        option.textContent = title;
        // Append the option to the select element 
        document.getElementById('posts').appendChild(option)
    })
}


async function fetchPost(url) {

    let response = await fetch(url);
    if (!response.ok) {
        return console.log(response)
    }
    // Everything is ok 
    let json = await response.json();
    document.getElementById('post-title').textContent = json.title;
    document.getElementById('post-body').textContent = json.body;

    if (json.comments) {
        let commentsArr = Object.entries(json.comments);
        commentsArr.forEach(([{ text }]) => {
            const li = document.createElement('li');
            li.textContent = text;
            document.getElementById('post-comments').appendChild(li)
        })
    }
}

attachEvents();