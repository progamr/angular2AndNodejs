var express = require('express');   // require express module
var app = express();    // create an express instance

// defining the route for / of type GET
app.get('/', function (req, res) {
    // returning string hello world as the response for the request
    res.send('Hello World!');
});

// start the server ob port 3000
app.listen(3000, function () {
    // logging message of server starting to the console
    console.log('Example app listening on port 3000!');
});