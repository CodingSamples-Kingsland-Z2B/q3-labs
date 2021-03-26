document.addEventListener('click', action);

function action(e) {
    e.preventDefault();
    if (e.target.nodeName == 'BUTTON' && e.target.innerText == 'ADD') {

        let title = document.querySelectorAll('#add-form input')[0];
        let image = document.querySelectorAll('#add-form input')[1];
        let body = document.querySelector('iframe').contentWindow.document.body;
        if (!image.value) {
            image.value = 'https://demofree.sirv.com/nope-not-here.jpg';
        }
        createPost(title, body, image);

    } else if (e.target.nodeName == 'SPAN' && e.target.classList.contains('like-btn')) {
        // LIKE BUTTON 

        let likes = e.target.nextElementSibling.innerText;
        likes = Number(likes);
        likes++;
        e.target.nextElementSibling.innerText = likes;
    } else if (e.target.nodeName == 'SPAN' && e.target.classList.contains('dislike-btn')) {
        // DISLIKE BUTTON 
        let dislikes = e.target.nextElementSibling.innerText;
        dislikes = Number(dislikes);
        dislikes++;
        e.target.nextElementSibling.innerText = dislikes;
    } else if (e.target.nodeName == 'SPAN' && e.target.classList.contains('comment-btn')) {
        // COMMENT BUTTON
        let comments = e.target.parentElement.parentElement.nextElementSibling;
        comments.classList.toggle('hide');
    } else if (e.target.nodeName == 'SPAN' && e.target.classList.contains('delete-btn')) {
        // DELETE BUTTON 
        console.log('deleted');
        e.target.parentElement.parentElement.parentElement.parentElement.remove();

    } else if (e.target.nodeName == 'SPAN' && e.target.classList.contains('edit-btn')) {
        // LIKE BUTTON 
        console.log('edited');
    }
    // DISLIKE BUTTON 
    // COMMENT BUTTON 
    //DELETE BUTTON 
    // EDIT BUTTON 
    // SEND COMMENT BUTTON 
}


function createPost(title, body, image) {

    let main = document.querySelector('main');

    // Create id 
    let id = Date.now();

    if (!title.value && !body.value) {
        return;
    }

    let section = document.createElement('section');
    section.classList.add('post', 'col-md-8', 'mx-auto', 'my-3');

    section.innerHTML = `
    <div class="card" id="post-${id}">
    <img class="card-img-top" src="${image.value}" alt="${title.value}">
    <div class="card-body">
        <h5 class="card-title text-center">${title.value}</h5>
        <p class="small text-center"> Posted on : ${new Date().toLocaleString()}</p>
        <p class="card-text" id="body"></p>

        <hr>
        <div class="card-actions">
            <button class="btn"> <span class="material-icons like-btn"> thumb_up </span> <span class="badge badge-primary"></span></button>
            <button class="btn"> <span class="material-icons dislike-btn"> thumb_down </span> <span class="badge badge-danger"></span></button>
            <button class="btn"> <span class="material-icons comment-btn"> comment </span> <span class="badge badge-success"></span> </button>
            <button class="btn float-right"> <span class="material-icons edit-btn"> edit </span> </button>
            <button class="btn float-right"> <span class="material-icons delete-btn"> delete </span> </button>
        </div>

        <div class="comment-section mt-4 hide">
            <hr>

            <form class="mt-3">
                <div class="row">
                    <div class="col-md-3 my-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="col-md-8 my-2">
                        <input type="text" class="form-control" placeholder="Comment">
                    </div>
                    <div class="my-2">
                        <button class="btn btn-success form-control"><span class="material-icons"> send </span> </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    `;
    main.appendChild(section);
    document.querySelector(`#post-${id} #body`).innerHTML = body.innerHTML;
    body.innerHTML = '';
    title.value = '';
    image.value = '';

}