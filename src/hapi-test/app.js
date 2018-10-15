'use strict';

const hapi = require('hapi');

// Create a server with a host and port
const server = hapi.server({
    host: 'localhost',
    port: 8000
});

// Start the server
async function start() {
    try {
        await server.start();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

start();
