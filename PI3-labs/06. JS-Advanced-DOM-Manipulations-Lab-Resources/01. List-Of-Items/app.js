function addItem() {

    // create the DOM variables 
    const list = document.querySelector('#items');
    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }

    // create a new LI element 
    const li = document.createElement('li');
    li.textContent = input.value;

    // Append the new li element to the ul element
    list.appendChild(li);

    // clear the input field 
    input.value = '';


}