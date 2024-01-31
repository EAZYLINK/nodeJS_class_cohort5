const Event =require('events')

// const emitter = new Event()

// emitter.on('greet', (name)=> {
//     console.log(`Hello, ${name}`)
// })

// emitter.emit('greet', 'John')

//An arithmetic operator event emitter
// const operatorEmitter = new Event()

// operatorEmitter.on('add', (a, b)=> {
//     console.log(a + b)
// })

// operatorEmitter.on('sub', (a, b)=> {
//     console.log(a - b)
// })

// operatorEmitter.on('diff', (a, b)=> {
//     diff = a > b ? a - b : b - a
//     console.log(diff)
// })

// operatorEmitter.on('div', (a, b)=> {
//     console.log(a / b)
// })

// operatorEmitter.on('mul', (a, b)=> {
//     console.log(a * b)
// })

// operatorEmitter.emit('div', 4, 5)


// TODO: create a chat room events
const chatRoom = new Event()

chatRoom.on('userJoined', (user) => {
    console.log(`${user} joined the chat.`)
})

chatRoom.on('message', (message) => {
    console.log(`message: ${message}`)
})


chatRoom.emit('userJoined', 'Audu')
chatRoom.emit('message', 'Hi, good to see you')
