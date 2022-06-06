const http = require('http');

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

const home = (request, response) => {
    // set a response status code
    response.statusCode = 200;
    // set the content type header of the response
    response.setHeader('Content-type', 'text/html');
    // send the response
    // - we must use response.end() to send the response (or an equivalent)
    //   otherwise the request will hang
    response.end('<h1>Hello world</h1>');
}

const notFound = (request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Page not found</h1>');
}

const requestHandler = (request, response) => {
    console.log(request.url);
    console.log(request.method);

    switch (request.url) {
        case "/":
            home(request, response);
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