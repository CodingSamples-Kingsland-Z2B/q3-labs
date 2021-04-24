const newsList = document.getElementById('news-list');
const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', loadUser);
loadUsers();


function loadUser(e) {
    console.log('Loading user');
    e.preventDefault();
    const userInput = document.getElementById('user-input').value;
    if (userInput) {

        fetch(`https://api.github.com/users/${userInput}`).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(user => {
            console.log(user)
            newsList.innerHTML =
                `
      <div class="col-md-3">
      <div class="card my-2">
          <img class="card-img-top" src="${user.avatar_url}" alt="${user.login}">
          <div class="card-body text-center">
              <h5 class="card-title">${user.login}</h5>
              <a href="${user.html_url}" class="btn btn-primary">More</a>
          </div>
      </div>
  </div>
      `
        }).catch(err => console.log(err));
    } else {
        loadUsers();
    }
}


function loadUsers() {

    fetch('https://api.github.com/users').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(data => {
        data.forEach(user => {

            newsList.innerHTML +=

                `
      <div class="col-md-3">
      <div class="card my-2">
          <img class="card-img-top" src="${user.avatar_url}" alt="${user.login}">
          <div class="card-body text-center">
              <h5 class="card-title">${user.login}</h5>
              <a href="${user.html_url}" class="btn btn-primary">More</a>
          </div>
      </div>
  </div>
      `
        })
    }).catch(err => console.log(err));

}