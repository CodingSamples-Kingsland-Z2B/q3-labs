export default class User {

    getLogin() {
        const viewData = { loginActive: true, msgs, formData }

        if (msgs.length >= 1) {
            let emailError = msgs.find(msg => msg.el === 'email');
            let passwordError = msgs.find(msg => msg.el === 'password');
            if (emailError) {
                viewData.emailInvalid = true;
            } else {
                viewData.emailValid = true;
            }

            if (passwordError) {
                viewData.passwordInvalid = true;
            } else {
                viewData.passwordValid = true;
            }
        }


        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/users/login.hbs', viewData).swap()
            msgs = [];
            formData = {};
        })
    }

    postLogin() {
        const { email, password } = this.params;
        formData.email = email;
        formData.password = password;

        if (!email) {
            msgs.push({ msg: 'Email Field is required', class: 'alert-danger', el: 'email' })
        } else if (!validator.isEmail(email)) {
            msgs.push({ msg: 'Email format is inccorect', class: 'alert-danger', el: 'email' })
        }

        if (!password) {
            msgs.push({ msg: 'Password Field is required', class: 'alert-danger', el: 'password' })
        } else if (!validator.isLength(password, { min: 6, max: 15 })) {
            msgs.push({ msg: 'Password should be 6-15 characters', class: 'alert-danger', el: 'password' })
        }

        this.redirect('/user/login')
    }


    getSignup() {
        const viewData = { signupActive: true, msgs, formData }

        if (msgs.length >= 1) {
            let emailError = msgs.find(msg => msg.el === 'email');
            let passwordError = msgs.find(msg => msg.el === 'password');
            let password2Error = msgs.find(msg => msg.el === 'password2');
            if (emailError) {
                viewData.emailInvalid = true;
            } else {
                viewData.emailValid = true;
            }

            if (passwordError) {
                viewData.passwordInvalid = true;
            } else {
                viewData.passwordValid = true;
            }

            if (password2Error) {
                viewData.password2Invalid = true;
            } else {
                viewData.password2Valid = true;
            }
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/users/signup.hbs', viewData).swap()
            msgs = [];
            formData = {};
        })
    }


    postSignup() {
        const { email, password, password2 } = this.params;
        formData.email = email;
        formData.password = password;
        formData.password2 = password2;

        if (!email) {
            msgs.push({ msg: 'Email Field is required', class: 'alert-danger', el: 'email' })
        } else if (!validator.isEmail(email)) {
            msgs.push({ msg: 'Email format is inccorect', class: 'alert-danger', el: 'email' })
        }

        if (!password) {
            msgs.push({ msg: 'Password Field is required', class: 'alert-danger', el: 'password' })
        } else if (!validator.isLength(password, { min: 6, max: 15 })) {
            msgs.push({ msg: 'Password should be 6-15 characters', class: 'alert-danger', el: 'password' })
        }

        if (!password2) {
            msgs.push({ msg: 'Please confirm your password', class: 'alert-danger', el: 'password2' })
        } else if (!validator.equals(password2, password)) {
            msgs.push({ msg: 'Passwords not matching', class: 'alert-danger', el: 'password2' })
        }

        this.redirect('/user/signup')
    }
}