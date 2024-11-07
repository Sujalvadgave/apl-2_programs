// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a listener for the 'greeting' event
myEmitter.on('greeting', (name) => {
    console.log(`Hello, ${name}! Welcome to the event-driven world of Node.js!`);
});

// Define another listener for the 'error' event
myEmitter.on('error', (errMessage) => {
    console.log(`Error: ${errMessage}`);
});

// Emit the 'greeting' event
myEmitter.emit('greeting', 'Alice');

// Emit the 'error' event
myEmitter.emit('error', 'Something went wrong!');

// Emit a custom event with different parameters
myEmitter.emit('greeting', 'Bob');
