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

const info = (request, response) => {
    // parse the url
    const url = URL.parse(request.url, true); // the second argument, true, indicates that we want the query parameters to be parsed into url.query
    // we can access query parameters via url.query
    // If the request was: localhost/info?country=England
    // - we can access country via url.query.country
    const country = url.query.country;
    
    // Exercise:
    // - Extend this example to accept a city and return this city in the response
    //   Example: Request sent = /info?county=England&city=Manchester
    //            Response     = The country is England and the city is Manchester

    response.statusCode = 200;
    
    // writing to a response does not send the response back
    response.write(`<p>The country is ${country}</p>`);

    // we might have some processing to do before sending the response back,
    // such as adding more HTML or data to the response

    // now send the response back
    response.end();
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);
    
    switch (url.pathname) {
        case "/":
            home(request, response);
            break;
        case "/info":
            info(request, response);
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