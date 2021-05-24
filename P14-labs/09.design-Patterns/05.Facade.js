let db = {
    'John Doe': { amount: 150000, background: true, credit: 640 }
}

// Bank subsystem
class Bank {

    verify(name, amount) {
        if (db[name].amount > amount) {
            return true
        } else {
            return false;
        }
    }

}


class Background {
    check(name) {
        if (db[name].background) {
            return true
        } else {
            return false;
        }
    }
}

class Credit {
    get(name) {
        if (db[name].credit > 700) {
            return true
        } else {
            return false;
        }
    }
}



class Mortage {
    constructor(name) {
        this.name = name;
    }

    applyFor(amount) {
        // access multiple subsytems 
        let result = 'approved';
        if (!new Bank().verify(this.name, amount)) {
            result = 'denied By Bank'
        } else if (!new Background().check(this.name)) {
            result = 'denied by Background check'
        } else if (!new Credit().get(this.name)) {
            result = 'denied by credit check'
        }

        return `${this.name} had been ${result} for a ${amount} mortgage`
    }
}



function main() {

    let mortgage = new Mortage('John Doe');
    console.log(mortgage.applyFor(120000))
}

main();