'use strict';

const hapi = require('hapi');

// Create a server with a host and port
const server = hapi.server({
    host: 'localhost',
    port: 8000
});
const adminServer = hapi.server({
    host: 'localhost',
    port: 8001
});

// Add a route to list users
adminServer.route({
    method: 'GET',
    path: '/users',
    handler: function (request, h) {
        //your code here
        console.dir(request);
    }
});

// const getAuthor = (request, reply) => {
//     // here the author and book parameters are inside request.params
//     console.log('getAuthor');
// };
// server.route({
//     path: '/{author}/{book?}',
//     method: 'GET',
//     handler: getAuthor
// });

function getPerson(req, reply) {
    let segments = req.params.name.split('/');
    console.log(segments);
    //the rest of your code here...
}
server.route({
    path: '/person/{name*2}',       // Matches '/person/john/doe'
    method: 'GET',
    handler: getPerson
});

function getAuthor(req, reply) {
    // The different segments can be obtained like this:
    let segments = req.params.name.split('/');
    console.log(segments);
    //the rest of your code goes here...
}
server.route({
    path: '/author/{name*}',        // Matches '/author/j/k/rowling' or '/author/frank/herbert' or /author/
    method: 'GET',
    handler: getAuthor
});

// Start the server
async function start() {
    try {
        await server.start();
        await adminServer.start();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    console.log('Servers running at: ', server.info.uri, ' and ', adminServer.info.uri);
}

start();
