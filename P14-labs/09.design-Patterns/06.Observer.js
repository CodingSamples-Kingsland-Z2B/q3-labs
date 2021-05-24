class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribe to ${fn.name}`)
    }

    unSubscribe(fn) {
        this.observers = this.observers.filter(item => item != fn)
        console.log(` You are noe unsubscribe from ${fn.name}`)
    }

    fire() {
        this.observers.forEach(item => item.call())
    }

}



// Handler 
const getTime = function() {
    console.log(`Current Seconds ${new Date().getSeconds()}`)
}

const click = new EventObserver()

// Event Listeners 
document.getElementById('sub').addEventListener('click', () => {
    click.subscribe(getTime);
})

// Event Listeners 
document.getElementById('unsub').addEventListener('click', () => {
    click.unSubscribe(getTime);
})

// Event Listeners 
document.getElementById('fire').addEventListener('click', () => {
    click.fire();
})