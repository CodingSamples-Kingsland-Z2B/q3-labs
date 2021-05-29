import Catalog from "./controllers/catalog";
import User from "./controllers/user";
import Kinvey from './kinvey';


window.db = new Kinvey('kid_rkP_D1st_', 'd7c5d294cd1a44c38e8dad822ea12972')
window.allTeams = [];



const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    db.get('teams', null, { username: 'guest', password: 'guest' }).then(res => {
        allTeams = res;
    });
    const catCtrl = new Catalog()
    const userCtrl = new User();

    // Home Page route 
    this.get('#/', catCtrl.getHome)
    this.get('#/home', catCtrl.getHome)

    // About Page route 
    this.get('#/about', catCtrl.getAbout)
        // About Page route 
    this.get('#/login', userCtrl.getLogin)
        // About Page route 
    this.post('#/login', userCtrl.postLogin)
    this.get('#/register', userCtrl.getRegisteration)
    this.post('#/register', userCtrl.postRegisteration)
    this.get('#/logout', userCtrl.getLogout)
    this.get('#/catalog', catCtrl.getCatalogs)
    this.get('#/create', catCtrl.getCreate)
    this.post('#/create', catCtrl.postCreate)
    this.get('#/catalog/:id', catCtrl.getDetail)
    this.get('#/edit/:id', catCtrl.getEdit);
    this.post('#/edit/:id', catCtrl.postEdit);
    this.get('#/join/:id', catCtrl.getJoin);
    this.get('#/leave/:id', catCtrl.getLeave)
})

app.run('#/')