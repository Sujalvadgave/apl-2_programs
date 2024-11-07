// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define the port for the server to listen on
const port = 3000;

// Middleware to parse JSON and URL-encoded data in POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route (GET request)
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express Web Server!</h1><p>This is a basic GET request example.</p>');
});

// About route (GET request)
app.get('/about', (req, res) => {
    // Accessing query parameters from the request
    const { name } = req.query;
    if (name) {
        res.send(`<h1>About Page</h1><p>Hello, ${name}!</p>`);
    } else {
        res.send('<h1>About Page</h1><p>Welcome to the about page!</p>');
    }
});

// POST request route to submit data
app.post('/submit', (req, res) => {
    // Accessing data from the body of the POST request
    const { name, email } = req.body;

    if (!name || !email) {
        // If name or email is missing, send an error response
        res.status(400).json({ message: 'Name and email are required!' });
    } else {
        // If name and email are provided, send a success response
        res.status(200).json({
            message: 'Form submitted successfully!',
            data: { name, email }
        });
    }
});

// Handling non-existing routes (404)
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
