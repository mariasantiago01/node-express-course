const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
})
customEmitter.on('response', (name, id) => {
    console.log(`some other message here`);
})

customEmitter.emit('response', 'john', 34)