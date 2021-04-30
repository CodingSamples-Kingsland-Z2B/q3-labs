function loadCommits() {
    const username = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repoName}/commits`;

    fetch(url).then((res) => {
        if (res.ok) {
            // check if everything is ok 
            return res.json()
        }
        throw (res)

    }).then((resJson) => {
        // If status == 200
        resJson.forEach(({ commit }) => {
            let message = `${commit.author.name} : ${commit.message}`;
            loadToDom(ul, message);
        })

    }).catch((err) => {
        console.log(err);
        //   Any other status or technical issues 
        let message = `Error : ${err.status} : ${err.statusText}`;
        loadToDom(ul, message);
    })

}


function loadToDom(el, text) {
    let li = document.createElement('li');
    li.textContent = text;
    el.appendChild(li)
}