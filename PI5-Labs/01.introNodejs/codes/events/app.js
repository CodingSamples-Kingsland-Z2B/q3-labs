const events = require('events');

let myEvent = new events.EventEmitter();



myEvent.on('my event', (a)=>{
  console.log('My event Fired and has arguments of ' + a );
})


myEvent.emit('my event', 'Event 1 arg', '123')



