//Creates a basic http server similar but not as strong as an express server
const http = require('http');

//Create an http server
//Two things you can use on a server are request and responses
//Request is something that is sent to the server
//Response is something that is sent back to the client side
const server = http.createServer((request, response) => {
    console.log('I hear you! Thanks for the request!');

    //Types of requests
    console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);

    //somehow sends html to the front end for an h1
    //response.setHeader('Content-Type', 'text/html');
    //response.end('<h1>Helloooo!</h1>');

    const user = {
        name: 'James',
        hobby: 'boxing'
    }
    //Create a REST API and send an object over the wire
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

//Tell the server what port to listen on
server.listen(3000);