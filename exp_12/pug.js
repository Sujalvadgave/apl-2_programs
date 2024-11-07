// Import Express
const express = require('express');

// Create an instance of Express
const app = express();

// Set the port for the application
const port = 8080;

// Set Pug as the templating engine
app.set('view engine', 'pug');

// Define the directory where Pug views are located (views folder)
app.set('views', './views');

// Sample route (using Pug templates)
app.get('/', (req, res) => {
    res.render('index', { title: 'Express with Pug', message: 'Hello, welcome to our website!' });
});

// Another route (dynamically render content)
app.get('/user', (req, res) => {
    const user = { name: 'John Doe', age: 30, occupation: 'Developer' };
    res.render('user', { title: 'User Profile', user });
});

// Handle 404 error (Page not found)
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
