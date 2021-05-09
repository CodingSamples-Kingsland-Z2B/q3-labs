// get <script> template by id 
const src = document.getElementById('cards').innerHTML;
// use handlebars to compile the template => HTML syntax
const template = Handlebars.compile(src);
// Merge the data to the handlebars code 

// register a partial 
const partiaclSrc = document.getElementById('header').innerHTML;
Handlebars.registerPartial('appName', partiaclSrc)


const htmlCode = template({ contacts, title: 'My Contacts' });



// append megred/template data into the DOM 
document.getElementById('contacts').innerHTML = htmlCode


function showDetails(id) {
    document.getElementById(id).classList.toggle('show')
}