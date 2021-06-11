const events =  require('events');

let ee = new events.EventEmitter();

// Event Bus 
ee.on(`Publish`, (message)=>{
   console.log(`[Publisher] send msg: ${message}`);
  //  Broadcast 
    ee.emit('Broadcast', message)
})

// Subscriber
ee.on('Broadcast', (message)=>{
  console.log( `[Subscriber] recieved msg: ${message}`)
})

// Publisher 
ee.emit('Publish', 'Hello everyone!')