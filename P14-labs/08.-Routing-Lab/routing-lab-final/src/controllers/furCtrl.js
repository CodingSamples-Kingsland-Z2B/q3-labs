import { createValidation } from "../validation";

function clearStates(viewData) {
    msgs = [];
    sharedData = {};
    viewData = {}
}


function isAuth() {
    if (sessionStorage.getItem('loggedIn')) {
        return true
    } else {
        return false
    }
}


export default class Furniture {
    getHome() {
        const viewData = {...sharedData, homeActive: true, loggedIn: isAuth(), msgs }

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
                    allFurnitures = res;
                    this.render('../views/app/home.hbs', viewData).swap();
                    clearStates(viewData);
                })
            })
        }

    }

    getCreate() {
        const viewData = {...sharedData, addActive: true, loggedIn: isAuth(), editMode: false }
        if (formData && msgs.length !== 0) {
            viewData.maker ? viewData.maker.input = formData.maker : '';
            viewData.model ? viewData.model.input = formData.model : '';
            viewData.year ? viewData.year.input = formData.year : '';
            viewData.desc ? viewData.desc.input = formData.desc : '';
            viewData.imageUrl ? viewData.imageUrl.input = formData.imageUrl : '';
            viewData.price ? viewData.price.input = formData.price : '';
            viewData.material ? viewData.material.input = formData.material : '';
            viewData.msgs = msgs;
        }

        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/app/create.hbs', viewData).swap()
            clearStates(viewData)
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
                allFurnitures.push({...serverData, _id: res._id })
                this.redirect('#/')
            })
        } else {
            this.redirect('#/furniture/create')
        }
    }

    getProfile() {
        const viewData = { profileActive: true, loggedIn: isAuth(), msgs }

        let myFurnitures = allFurnitures.filter(fur => fur.user == sessionStorage.getItem('user'))

        console.log(myFurnitures)
        viewData.myFurnitures = myFurnitures;
        this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {
            this.render('../views/app/profile.hbs', viewData).swap();

            clearStates(viewData);
        })


    }

    getDetatils() {
        const product = allFurnitures.find(item => item._id.toString() === this.params.id);
        console.log(product, this.params.id)
        if (product) {
            let viewData = { product, loggedIn: isAuth(), msgs }
            this.loadPartials({ navbar: '../views/partials/navbar.hbs', notifications: '../views/partials/notifications.hbs' }).then(function() {
                this.render('../views/app/details.hbs', viewData).swap()
                clearStates(viewData);
            })
        }
    }


    getDelete() {
        let id = this.params.id;
        db.delete('furniture', id, sessionStorage.getItem('loggedIn')).then(() => {
            allFurnitures = allFurnitures.filter(fur => fur._id !== id);
            this.redirect('#/furniture/profile')
        })
    }


    getEdit() {

        let id = this.params.id
        let furniture = allFurnitures.find(fur => fur._id == id);

        let viewData = {
            loggedIn: isAuth(),
            editMode: true,
            id: furniture._id,
            msgs,
            ...sharedData
        }

        if (Object.keys(sharedData).length > 1) {
            viewData.maker.input = formData.maker;
            viewData.model.input = formData.model;
            viewData.year.input = formData.year;
            viewData.imageUrl.input = formData.imageUrl;
            viewData.desc.input = formData.desc;
            viewData.price.input = formData.price;

        } else {
            viewData.maker = { input: furniture.maker }
            viewData.model = { input: furniture.model }
            viewData.year = { input: furniture.year }
            viewData.imageUrl = { input: furniture.imageUrl }
            viewData.desc = { input: furniture.desc }
            viewData.price = { input: furniture.price }
        }


        this.loadPartials({
            navbar: '../views/partials/navbar.hbs',
            notifications: '../views/partials/notifications.hbs'
        }).then(function() {
            this.render('../views/app/create.hbs', viewData).swap()
            clearStates(viewData)
        })

    }
    postEdit() {
        let { maker, model, year, desc, price, imageUrl, material, id } = this.params;
        formData = { maker, model, year, desc, price, imageUrl, material }
        let isValid = createValidation(formData);


        if (isValid) {
            let serverData = {...formData, user: sessionStorage.getItem('user') }
            db.edit('furniture', id, serverData, sessionStorage.getItem('loggedIn')).then(res => {
                msgs.push({ msg: 'Furniture updated successully !', class: 'alert-success' });

                let index = allFurnitures.findIndex(fur => fur._id == id);
                allFurnitures[index] = {...serverData, _id: id }

                // allFurnitures = allFurnitures.filter(fur => fur._id !== id)
                // allFurnitures.push({...serverData, _id: id })

                this.redirect('#/furniture/profile')
            })
        } else {
            this.redirect(`#/furniture/edit/${id}`)
        }

    }
}