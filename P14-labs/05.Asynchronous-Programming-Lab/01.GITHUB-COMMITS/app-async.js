async function loadCommits() {
    const username = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    const url = `https://api.github.com/repo/${username}/${repoName}/commits`;

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw (res)
        }
        const resJson = await res.json();
        resJson.forEach(({ commit }) => {
            let message = `${commit.author.name} : ${commit.message}`;
            loadToDom(ul, message);
        })

    } catch (err) {
        console.log(err);
        //   Any other status or technical issues 
        let message = `Error : ${err.status} : ${err.statusText}`;
        loadToDom(ul, message);
    }
}


function loadToDom(el, text) {
    let li = document.createElement('li');
    li.textContent = text;
    el.appendChild(li)
}