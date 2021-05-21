import { loginValidation, signupValidation } from "../validation";


function isAuth() {
    if (sessionStorage.getItem('loggedIn')) {
        return true
    } else {
        return false
    }
}

function clearStates(viewData) {
    msgs = [];
    sharedData = {};
    viewData = {}
}
export default class User {

    getLogin() {
        const viewData = {...sharedData, loginActive: true, loggedIn: isAuth() }

        if (formData && msgs.length !== 0) {
            viewData.email ? viewData.email.input = formData.email : '';
            viewData.password ? viewData.password.input = formData.password : '';
            viewData.msgs = msgs;
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/users/login.hbs', viewData).swap()
            clearStates(viewData);
        })
    }

    postLogin() {

        const { email, password } = this.params;
        formData = { email, password };
        let isValid = loginValidation(formData);


        if (!isValid) {
            this.redirect('#/user/login');
            return
        }

        sharedData.isLoading = true;
        this.redirect('#/user/login');

        db.login({ username: email, password }).then(jsonRes => {
            sessionStorage.setItem('user', jsonRes._id);
            sessionStorage.setItem('loggedIn', jsonRes._kmd.authtoken);
            msgs.push({ msg: 'Logged In successully !', class: 'alert-success' })
            sharedData.isLoading = false;
            this.redirect('#/furniture/profile')
        }).catch(err => {
            msgs.push({ msg: err.statusText, class: 'alert-danger' });
            sharedData.email = {}
            sharedData.email.invalid = true;
            sharedData.password = {};
            sharedData.isLoading = false;
            this.redirect('#/user/login');
        })

    }


    getSignup() {
        const viewData = {...sharedData, signupActive: true, loggedIn: isAuth() }
        if (formData && msgs.length !== 0) {
            viewData.email.input = formData.email;
            viewData.password.input = formData.password;
            viewData.password2.input = formData.password2;
            viewData.msgs = msgs;
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/users/signup.hbs', viewData).swap()
            clearStates(viewData)
        })
    }


    postSignup() {
        const { email, password, password2 } = this.params;
        formData = { email, password2, password };
        let isValid = signupValidation(formData);

        if (!isValid) {
            this.redirect('#/user/signup');
            return
        }

        sharedData.isLoading = true;
        this.redirect('#/user/signup')
        db.signup({ username: email, password }).then(res => {
            console.log(res);
            msgs.push({ msg: 'User Created Successfully !', class: 'alert-success' })
            sharedData.isLoading = false;
            this.redirect('#/user/login');
            formData = {}
        }).catch(err => {
            if (err.status === 409) {
                msgs.push({ msg: 'User Already exists!', class: 'alert-danger' });
                sharedData.email = {}
                sharedData.email.invalid = true;
                sharedData.password = {};
                sharedData.password2 = {};
                sharedData.isLoading = false;
                this.redirect('#/user/signup');
            }
        })
    }



    getLogout() {

        let token = sessionStorage.getItem('loggedIn');
        db.logout(token).then(res => {
            msgs.push({ msg: 'Logged out Successfully !', class: 'alert-success' });
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('user');
            this.redirect('#/user/login');
        }).catch(err => {
            msgs.push({ msg: err.statusText, class: 'alert-danger' });
            this.redirect('#/')
        })
    }
}