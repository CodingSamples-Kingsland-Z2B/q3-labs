class Partial {
    constructor(path, name, data) {
        this.name = name;
        this.path = path;
        this.data = data;
    }
}


// @path     string 
// @data     object 
// @el       string css selector 
// @partials array of partials 
class Template {
    constructor(path, data, el, partials) {
        this.path = path;
        this.data = data;
        this.el = el;
        this.partials = partials
    }


    render() {

        // Check if there are partials or no 
        if (this.partials.length >= 1) {
            let partialsData = this.partials.map(e => e.data)
            partialsData = Object.assign({}, ...partialsData)
            this.data = {...this.data, ...partialsData }
            this.partials.forEach(partial => {
                this.loadFile(partial.path).then(src => {
                    const name = partial.name;
                    Handlebars.registerPartial(name, src);
                })
            })
        }

        //  No partials 
        this.loadFile(this.path).then(src => {

            const template = Handlebars.compile(src);
            const result = template(this.data);
            document.querySelector(this.el).innerHTML = result
        })


    }


    set setPartial([name, data]) {
        const index = this.partials.findIndex(p => p.name === name);
        this.partials[index].data = data;
    }


    loadFile(path) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then(res => res.text())
                .then(text => resolve(text))
                .catch(err => reject(err))
        })
    }

}