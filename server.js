const PORT_NUMBER = 3000;
const http = require('http');

const server = http.createServer((req,res) => {
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello from Node Js</title>
    </head>
    <body>
        <h1>Hello from node</h1>
    </body>
    </html>
    `)
    res.end();
});

server.listen(PORT_NUMBER, () => console.log('listen on port number: ' + PORT_NUMBER))