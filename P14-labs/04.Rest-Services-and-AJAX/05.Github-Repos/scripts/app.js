function loadRepos() {

    const username = document.getElementById('username').value;
    // clear the ul element innerHTML
    const repos = document.getElementById('repos');
    repos.innerHTML = '';
    // construct the URL 
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(`${res.status} - ${res.statusText}`)

    }).then((data) => {
        console.log(data)
        data.forEach(repo => {
            // let li = document.createElement('li');
            // let a = document.createElement('a');
            // a.href = repo.html_url;
            // a.textContent = repo.full_name;
            // li.appendChild(a);
            // repos.appendChild(li);

            // Method 2
            repos.innerHTML += `<li><a href='${repo.html_url}'> ${repo.full_name} </a></li>`
        })

    }).catch((err) => {
        let li = document.createElement('li');
        li.textContent = `${err}`;
        repos.appendChild(li);
    })
}

//<ul><li><a></a></li><ul>