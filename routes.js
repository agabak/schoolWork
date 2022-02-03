//node js create loop to handle all the event - Event loop. 
(() => {

    const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/')  {

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
        <form  action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>
    </body>
    </html>
    `)

    return res.end();

    }

    if(url === "/message" && method === "POST") {
        
        const body = []
        req.on('data', (chunk) => {

             console.log(chunk);

            // push the data to the empty array
           body.push(chunk);
        });

        req.on('end', () => {

          const parseBody = Buffer.concat(body).toString();

          const message = parseBody.split('=')[1];

          fs.writeFile('message.txt', message, error => {
              // log error if there any 
              if(error) {
                console.log(error);
              }
          })
        }); 

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

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
}

module.exports = {
  handler : requestHandler,
  someText: 'Mimi testing'
} 

})();
