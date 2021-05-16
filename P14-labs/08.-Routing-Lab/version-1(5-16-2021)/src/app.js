import User from './controllers/userCtrl';
import Furniture from './controllers/furCtrl';

window.allFurnitures = [];
window.msgs = [];
window.formData = {};


const app = Sammy('#container', function() {
    this.use('Handlebars', 'hbs')
    const userCtrl = new User();
    const furCtrl = new Furniture();

    //@route    GET  /
    //@desc     render Home Page 
    //@access   Public
    this.get('/', furCtrl.getHome)

    //@route    GET  /furniture/create
    //@desc     render create Page 
    //@access   Public
    this.get('/furniture/create', furCtrl.getCreate)

    //@route    GET  /furniture/profile
    //@desc     render profile Page 
    //@access   Private
    this.get('/furniture/profile', furCtrl.getProfile)

    //@route    GET  /furniture/details/:id
    //@desc     render furniture details view
    //@access   Public
    this.get('/details/:id', furCtrl.getDetatils);

    //@route    GET  /user/login
    //@desc     render login Page 
    //@access   Public
    this.get('/user/login', userCtrl.getLogin);

    //@route    POST  /user/login
    //@desc     process and login users
    //@access   Private
    this.post('/user/login', userCtrl.postLogin)

    //@route    GET  /user/signup
    //@desc     render signup Page 
    //@access   Public
    this.get('/user/signup', userCtrl.getSignup)


    //@route    POST  /user/signup
    //@desc     process and sigup users
    //@access   Private
    this.post('/user/signup', userCtrl.postSignup)



})

app.run('/')