const partials = [
    new Partial('./views/header.hbs', 'appTitle', { title: 'My contacts' }),

]

const mainTemp = new Template('./views/main.hbs', { contacts }, '#contacts', partials)
mainTemp.render()
    // mainTemp.setPartial = ['appTitle', { title: 'New Title' }];
    // mainTemp.render()

function showDetails(id) {
    document.getElementById(id).classList.toggle('show')
}