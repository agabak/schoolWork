const PORT_NUMNER = 3000;
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler) // this like delegate in c# passing a function as parameter

console.log(routes.someText)

server.listen(PORT_NUMNER, () => {
   console.log('Node server started at port : ' + PORT_NUMNER);
});