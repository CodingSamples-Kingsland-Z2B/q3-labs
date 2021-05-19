import { createValidation } from "../validation";

function clearStates(viewData) {

    msgs = [];
    sharedData = {};
    viewData = {}

}

export default class Furniture {
    getHome() {
        const viewData = {...sharedData, homeActive: true, loggedIn, msgs }

        if (allFurnitures.length != 0) {
            // No need to fetch from the server 
            viewData.allFurnitures = allFurnitures;
            viewData.isLoading = false;
            this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {
                this.render('../views/app/home.hbs', viewData).swap();
                clearStates(viewData);
            })

        } else {
            // Go and fetch from the server 

            this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {

                viewData.isLoading = true;
                this.render('../views/app/home.hbs', viewData).swap()
                db.get('furniture', null, { username: 'guest', password: 'guest' }).then(res => {
                    viewData.allFurnitures = res;
                    viewData.isLoading = false;
                    this.render('../views/app/home.hbs', viewData).swap();
                    clearStates(viewData);
                })
            })
        }

    }

    getCreate() {
        const viewData = {...sharedData, addActive: true, loggedIn }
        if (formData && msgs.length !== 0) {
            viewData.maker ? viewData.maker.input = formData.maker : '';
            viewData.model ? viewData.model.input = formData.model : '';
            viewData.msgs = msgs;
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/app/create.hbs', viewData).swap()
        })
    }


    postCreate() {
        let { maker, model, year, desc, price, imageUrl, material } = this.params;
        formData = { maker, model, year, desc, price, imageUrl, material }
        let isValid = createValidation(formData);

        if (isValid) {
            let serverData = {...formData, user: sessionStorage.getItem('user') }
            db.post('furniture', serverData, sessionStorage.getItem('loggedIn')).then(res => {
                msgs.push({ msg: 'Furniture created successully !', class: 'alert-success' });
                this.redirect('/')
            })
        } else {
            this.redirect('/furniture/create')
        }


    }

    getProfile() {
        const viewData = { profileActive: true, loggedIn, msgs }

        let myFurnitures = allFurnitures.filter(fur => fur.user == sessionStorage.getItem('user'))

        viewData.myFurnitures = myFurnitures;
        this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {
            this.render('../views/app/profile.hbs', viewData).swap();
            clearStates(viewData);
        })


    }


    getDetatils() {
        const product = allFurnitures.find(item => item.id.toString() === this.params.id);
        if (product) {
            this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {
                this.render('../views/app/details.hbs', { product }).swap()
            })
        }
    }
}