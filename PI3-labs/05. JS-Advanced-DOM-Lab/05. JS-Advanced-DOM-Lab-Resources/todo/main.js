let addBtn = document.getElementById('menu-add-btn');
let cancelBtn = document.getElementById('form-cancel-btn');
let modal = document.getElementById('modal');


addBtn.addEventListener('click', dropDown);
cancelBtn.addEventListener('click', goUp);


function dropDown() {
    modal.classList.remove('goup');
    modal.classList.add('dropDown');
}

function goUp() {
    modal.classList.remove('dropDown');
    modal.classList.add('goup');
}