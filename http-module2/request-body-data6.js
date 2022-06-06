const http = require('http');
const URL = require('url'); // URL module allows us to parse URLs for their path and query parameters, amongst other things
const fs = require('fs').promises;

const host = 'localhost'; // 127.0.0.1 is also valid for localhost
const port = 3000;

const serve = (request, response, file) => {
    fs.readFile(__dirname + `/static/${file}`)
      .then(data => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(data);
      })
      .catch(error => {
        console.error(error.message);
        notFound(request, response);
      });
}

const returnBodyData = (request, response) => {
    let data = '';

    // request.on() accepts an event and a callback function to bind to that event
    request.on('data', chunk => {
        // the data event means their is data in the requests body
        data += chunk; // builds up a JSON string from the request body
    })
    request.on('end', () => {
        // the end event signifies the body has finished being read
        console.log(JSON.parse(data));
        response.setHeader('Content-type', 'application/json');
        response.end(data);
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
        case "/body":
            returnBodyData(request, response);
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