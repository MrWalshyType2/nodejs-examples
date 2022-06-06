const http = require('http');
const URL = require('url'); // URL module allows us to parse URLs for their path and query parameters, amongst other things

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

const home = (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Hello world</h1>');
}

const notFound = (request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Page not found</h1>');
}

const table = (request, response) => {
    const url = URL.parse(request.url, true);
    const table = url.query.table || 1; // defaults to 1 times table
    const range = url.query.range || 12; // default to range of 12

    response.statusCode = 200; 
    
    // Implement an appropriate response for this method
    // - the response should be a HTML list of elements, indicating the operation
    //   as follows: <li>table * numInRange = product</li>
    //
    // Example rendered in browser:
    // 12 times table (upto 12)
    // - 12 * 1 = 12
    // - 12 * 2 = 24
    // etc...
    // HINT: You can build up a response of HTML by repeatedly calling response.write(html), this will not return the response.

    response.end(); // return the response.
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);
    
    switch (url.pathname) {
        case "/":
            home(request, response);
            break;
        case "/table":
            table(request, response);
            break;
        default:
            notFound(request, response);
            break;
    }
}

// create the server and assign it a request handler
// - the request handler is a callback function which accepts two parameters, request and response
const server = http.createServer(requestHandler);

// start the server
// - call the listen() method on the server object
server.listen(port, host, () => {
    // the code in here runs once the server has started
    console.log(`Server up on ${host}:${port}`);
});