const fs = require('fs');

const requestHandler = (req, res)  =>  {

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
            <title>Hello there welcome to my Node server</title>
        </head>
        <body>
            <h1>Hello there welcome to my Node server</h1>
            <br />
             <form action="/create-user" method="POST">
               <input   type="text" name="username" />
               <button type="submit">Sent</button>
             </form>
        </body>
        </html>
        `);
        return res.end();
    }

    if(url === '/users')  {
        res.write(`  
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Members List</title>
        </head>
        <body>
            <ul>
                 <li>User 1 </li>
                 <li>User 2 </li>
                 <li>User 3 </li>
            </ul>
        </body>
        </html>
        `);

      return res.end();
    }


     if(url === '/create-user' && method === 'POST') {
        
        const body = [];
        req.on('data', chunk => {
         
            body.push(chunk)
            console.log(chunk)
        });

        req.on('end', () => {

            const parseBody = Buffer.concat(body).toString();

            const username = parseBody.split('=')[1];

            // log the file to the console
            console.log(username);
            
            // store the file to the data file
            fs.writeFile('data.txt', username, error => {
                if(error) {
                    console.log(error);
                }
                console.log('worked')
            });
        })
     }

    res.end();

}

exports.handler = requestHandler;