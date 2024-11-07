// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

// Define the port where the server will run
const port = 3000;

// Create the server using the HTTP module
const server = http.createServer((req, res) => {
    // Get the requested URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Handle the root route (index page)
    if (pathname === '/' && req.method === 'GET') {
        // Read the HTML file for the homepage
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading the index.html file');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data); // Serve the index.html page
        });
    }
    // Handle the 'about' route
    else if (pathname === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Page</h1><p>This is a simple Node.js web server example.</p>');
    }
    // Handle a simple API route returning JSON
    else if (pathname === '/api' && req.method === 'GET') {
        const responseObj = { message: 'Welcome to the API endpoint!' };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(responseObj));
    }
    // Handle form submissions with POST requests
    else if (pathname === '/submit' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name || 'Anonymous';
            const email = parsedBody.email || 'No email provided';

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Form Submitted</h1><p>Name: ${name}</p><p>Email: ${email}</p>`);
        });
    }
    // Serve static files (like images, CSS, JavaScript)
    else if (pathname === '/style.css' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading the CSS file');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    }
    // Handle all other routes (404 Not Found)
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
