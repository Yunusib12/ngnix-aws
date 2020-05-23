// require fileSystem
const fs = require('fs');

// require express 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//Define default route with express
app.get('/', (req, res) => {

    res.send('<h1>Welcome to Express.js</h1>');
});

// Read file using express server
app.get('/getmovies', (req, res) => {
    // Read data from a file
    fs.readFile('./data/db.json', (err, result) => err ? console.log(err) : res.send(JSON.parse(result)));
});


app.listen(port, (err) => console.log(`Server running on port ${port}`));
