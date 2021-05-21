import User from './controllers/userCtrl';
import Furniture from './controllers/furCtrl';
import Kinvey from './helpers/kinvey';

// States or global data that are shared with views 

window.allFurnitures = []; // dom data 
window.msgs = [];
window.sharedData = {}
window.formData = {};
window.db = new Kinvey('kid_BkYBymjvd', 'ed0eed3599fa4d5d9d062fae8755f43c');



const app = Sammy('#container', function() {
    this.use('Handlebars', 'hbs')


    db.get('furniture', null, { username: 'guest', password: 'guest' }).then(res => {
        allFurnitures = res;
    })

    const userCtrl = new User();
    const furCtrl = new Furniture();

    //@route    GET  /
    //@desc     render Home Page 
    //@access   Public
    this.get('#/', furCtrl.getHome)

    //@route    GET  /furniture/create
    //@desc     render create Page 
    //@access   Private
    this.get('#/furniture/create', furCtrl.getCreate)
        //@route    Post  /furniture/create
        //@desc     store new furniture in db  
        //@access   Private
    this.post('#/furniture/create', furCtrl.postCreate)

    //@route    GET  /furniture/profile
    //@desc     render profile Page 
    //@access   Private
    this.get('#/furniture/profile', furCtrl.getProfile)

    //@route    GET  /furniture/details/:id
    //@desc     render furniture details view
    //@access   Public
    this.get('#/furniture/details/:id', furCtrl.getDetatils);

    //@route    GET  /furniture/delete/:id
    //@desc     Delete a furniture
    //@access   Private
    this.get('#/furniture/delete/:id', furCtrl.getDelete);

    //@route    GET  /furniture/edit/:id
    //@desc     Edit a furniture
    //@access   Private
    this.get('#/furniture/edit/:id', furCtrl.getEdit);

    //@route    GET  /furniture/edit/
    //@desc     Process the update furniture
    //@access   Private
    this.post('#/furniture/edit', furCtrl.postEdit);

    //@route    GET  /user/login
    //@desc     render login Page 
    //@access   Public
    this.get('#/user/login', userCtrl.getLogin);

    //@route    GET  /user/logout
    //@desc     logoout a user 
    //@access   Private
    this.get('#/user/logout', userCtrl.getLogout);

    //@route    POST  /user/login
    //@desc     process and login users
    //@access   Private
    this.post('#/user/login', userCtrl.postLogin)

    //@route    GET  /user/signup
    //@desc     render signup Page 
    //@access   Public
    this.get('#/user/signup', userCtrl.getSignup)

    //@route    POST  /user/signup
    //@desc     process and sigup users
    //@access   Private
    this.post('#/user/signup', userCtrl.postSignup)

})

app.run('#/')