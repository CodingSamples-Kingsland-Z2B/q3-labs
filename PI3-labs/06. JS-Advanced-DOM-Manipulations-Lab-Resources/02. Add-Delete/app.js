function addItem() {

    // Get the DOM variables 
    const list = document.getElementById('items');
    const input = document.getElementById('newText');

    // create elements (li, a)
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.textContent = input.value + ' ';
    a.textContent = '[DELETE]';
    // a.classList.add('delete-link')
    a.setAttribute('href', '#');
    li.appendChild(a);
    list.appendChild(li);

    // clear the input value;
    input.value = '';
}

document.body.addEventListener('click', function(e) {
    // if (e.target.classList.contains('delete-link')) {
    if (e.target.nodeName === 'A') {
        const li = e.target.parentElement;
        li.remove();
    }
})