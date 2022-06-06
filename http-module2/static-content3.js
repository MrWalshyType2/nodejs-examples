const http = require('http');
const URL = require('url'); // URL module allows us to parse URLs for their path and query parameters, amongst other things
const fs = require('fs').promises;
// to server static content, we need the fs (file system) module. This allows us to read and write files

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

const serve = (request, response, file) => {
    // fs.readFile() allows us to read a file from the file system
    // - this is the the promise version
    // - .readFile() accepts a file path as input
    // - .readFile() returns a promise
    fs.readFile(__dirname + `/static/${file}`)
        // __dirname is a global variable accessible in Node.js, it holds the absolute path
        // on the file system to the root of the project that this file belongs to
      .then(data => {
        // callback that handles successfully reading the file
        // - data is the files contents
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(data);
      })
      .catch(error => {
        // callback that handles the error if the file is not found
        console.error(error.message);
        notFound(request, response);
      });
}

const notFound = (request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Page not found</h1>');
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);

    switch (url.pathname) {
        case "/":
            serve(request, response, "index.html");
            break;
        // Exercise: Create a second route capable of serving an about.html page from the `static` folder
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