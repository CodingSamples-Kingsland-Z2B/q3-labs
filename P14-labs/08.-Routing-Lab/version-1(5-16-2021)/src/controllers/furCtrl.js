export default class Furniture {

    getHome() {
        const viewData = { allFurnitures, homeActive: true }

        this.loadPartials({ navbar: '../views/partials/navbar.hbs' }).then(function() {
            this.render('../views/app/home.hbs', viewData).swap()
        })
    }

    getCreate() {
        const viewData = { addActive: true }
        this.loadPartials({ navbar: '../views/partials/navbar.hbs' }).then(function() {
            this.render('../views/app/create.hbs', viewData).swap()
        })
    }

    getProfile() {
        const viewData = { profileActive: true }
        this.loadPartials({ navbar: '../views/partials/navbar.hbs' }).then(function() {
            this.render('../views/app/profile.hbs', viewData).swap()
        })
    }


    getDetatils() {
        const product = allFurnitures.find(item => item.id.toString() === this.params.id);
        if (product) {
            this.loadPartials({ navbar: '../views/partials/navbar.hbs' }).then(function() {
                this.render('../views/app/details.hbs', { product }).swap()
            })
        }
    }
}