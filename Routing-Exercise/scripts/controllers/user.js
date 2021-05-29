import { isAuth, sendMsg } from '../helpers';

export default class User {

    getLogin() {
        const viewData = { loggedIn: isAuth() }
        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            loginForm: '../templates/login/loginForm.hbs'
        }).then(function() {
            this.render('../templates/login/loginPage.hbs', viewData).swap()
        })

    }


    postLogin() {
        const { username, password } = this.params;
        if (!username || !password) {
            sendMsg('error', 'Please Fill in the login Form', 2)
            return;
        }

        db.login({ username, password }).then(res => {
            console.log(res);
            sessionStorage.setItem('user', res._id);
            sessionStorage.setItem('loggedIn', res._kmd.authtoken);
            sessionStorage.setItem('username', res.username);
            sendMsg('info', 'Logged In Successfully !', 2)
            this.redirect('#/');
        }).catch(err => {
            sendMsg('error', err.statusText, 2)
            this.redirect('#/user/login')
        })

    }

    getRegisteration() {
        const viewData = { loggedIn: isAuth() }
        this.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            registerForm: '../templates/register/registerForm.hbs'
        }).then(function() {
            this.render('../templates/register/registerPage.hbs', viewData).swap()
        })

    }
    postRegisteration() {

        const { username, password, repeatPassword } = this.params;

        if (!username || !password || !repeatPassword) {
            sendMsg('error', 'Please Fill in the login Form', 2)
            return
        }

        if (password !== repeatPassword) {
            sendMsg('error', 'Passwods not matching ', 2)
            return
        }

        db.signup({ username, password }).then(res => {
            sendMsg('info', 'User Created  Successfully !', 2)
            this.redirect('#/login');
        }).catch(err => {
            if (err.status === 409) {
                sendMsg('error', 'User already exist ', 2);
                this.redirect('#/register');
            }
        })
    }

    getLogout() {
        let token = sessionStorage.getItem('loggedIn');
        db.logout(token).then(res => {
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('user');
            sendMsg('info', 'Successfully loggedout!', 2)
            this.redirect('#/login');
        }).catch(err => {
            sendMsg('error', err.statusText, 2);
            this.redirect('#/')
        })

    }

}