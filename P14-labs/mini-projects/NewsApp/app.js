let apiKey = '55182d8f78c6485ba60e020c83de8fef'

let countries = [
    { name: 'USA', value: 'us' },
    { name: 'United Arab Emirates', value: 'ue' },
    { name: 'Argentina', value: 'ar' },
    { name: 'Canada', value: 'ca' },
    { name: 'China', value: 'cn' },

]

const app = Sammy('#container', function() {
    this.use('Handlebars', 'hbs');



    this.get('#/', function() {

        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(jsonRes => {
                this.loadPartials({
                    navbar: './views/partials/navbar.hbs',
                    newsCard: './views/partials/newsCard.hbs'
                }).then(function() {
                    console.log(jsonRes)
                    this.render('./views/home.hbs', { articles: jsonRes.articles }).swap()
                })
            })
    })


    this.post('#/search', function() {

        let searchItem = this.params.searchInput
        fetch(`https://newsapi.org/v2/everything?q=${searchItem}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(jsonRes => {
                this.loadPartials({
                    navbar: './views/partials/navbar.hbs',
                    newsCard: './views/partials/newsCard.hbs'
                }).then(function() {
                    console.log(jsonRes)
                    this.render('./views/home.hbs', { articles: jsonRes.articles }).swap()
                })
            })
    })


    this.get('#/country', function() {

        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(jsonRes => {
                this.loadPartials({
                    navbar: './views/partials/navbar.hbs',
                    newsCard: './views/partials/newsCard.hbs',
                    countryForm: './views/partials/countryForm.hbs',
                }).then(function() {
                    console.log(jsonRes)
                    this.render('./views/countryPage.hbs', { articles: jsonRes.articles, countries }).swap()
                })
            })

    })

    this.post('#/country', function() {

        let country = this.params.country;
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(jsonRes => {
                this.loadPartials({
                    navbar: './views/partials/navbar.hbs',
                    newsCard: './views/partials/newsCard.hbs',
                    countryForm: './views/partials/countryForm.hbs',
                }).then(function() {
                    console.log(jsonRes)
                    this.render('./views/countryPage.hbs', { articles: jsonRes.articles, countries }).swap()
                })
            })

    })



})


app.run('#/')