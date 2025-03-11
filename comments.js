// Create web server
// Run the server
// Create a new file called `comments.js` and add the following code:
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('You have an error: ', err);
    }

    console.log(`server is listening on ${port}`);
});

// Run the server
// Run the server by entering the following command in the terminal:
// node comments.js
// Open your browser and go to http://localhost:3000. You should see the message Hello Node.js Server! on the screen.
// You can also see the message Hello Node.js Server! in the terminal where you ran the server.