// // import the pets array from data.js
// const pets = require('./data');

// // init express app
// const express = require('express');
// const app = express();

// const PORT = 8080;

// // GET - / - returns homepage
// app.get('/', (req, res) => {
//     // serve up the public folder as static index.html file

// });

// // hello world route
// app.get('/api', (req, res) => {
//     res.send('Hello World!');
// });

// // get all pets from the database
// app.get('/api/v1/pets', (req, res) => {
//     // send the pets array as a response

// });

// // get pet by owner with query string
// app.get('/api/v1/pets/owner', (req, res) => {
//     // get the owner from the request


//     // find the pet in the pets array
//     const pet = pets.find(pet => pet.owner === owner);

//     // send the pet as a response

// });

// // get pet by name
// app.get('/api/v1/pets/:name', (req, res) => {
//     // get the name from the request


//     // find the pet in the pets array
//     const pet = pets.find(pet => pet.name === name);

//     // send the pet as a response

// });

// app.listen(PORT, () => {
//     console.log('Server is listening on port ' + PORT);
// });

// module.exports = app;

// import the pets array from data.js
const pets = require('./data');
const express = require('express');
const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static('public'));

// GET - / - returns homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// Get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);
});

// Get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    const petsByOwner = pets.filter(pet => pet.owner === owner);
    res.json(petsByOwner);
});

// Get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const pet = pets.find(pet => pet.name === name);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
