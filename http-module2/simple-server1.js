// The http module contains functions and properties that can 
// be used to create simple web applications
// - this module is included with Node.js
// - a node module is just a bundle of code, it is an object through which we can access properties, functions or even create types

// the require keyword allows us to import a module in Nodejs
const http = require('http');

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

// create the server and assign it a request handler
// - the request handler is a callback function which accepts two parameters, request and response
const server = http.createServer((request, response) => {
    // set a response status code
    response.statusCode = 200;
    // set the content type header of the response
    response.setHeader('Content-type', 'text/html');
    // send the response
    response.end('<h1>Hello world</h1>');
});

// start the server
// - call the listen() method on the server object
server.listen(port, host, () => {
    // the code in here runs once the server has started
    console.log(`Server up on ${host}:${port}`);
});