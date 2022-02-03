const PORT_NUMNER = 3000;
const http = require('http');
const fs = require('fs');
const routes = require('./routes')

const server = http.createServer(routes.handler);

// because the function take to arguments req and res...

server.listen(PORT_NUMNER, () => console.log('Node server started at: ' + PORT_NUMNER));
