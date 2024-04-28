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
const path = require('path'); // Added to handle file paths
const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// GET - / - returns homepage
app.get('/', (req, res) => {
    console.log('Serving index.html');
    res.sendFile(__dirname + '/public/index.html');
});

// Hello world route
app.get('/api', (req, res) => {
    console.log('Received request at /api');
    res.send('Hello World!');
});

// Get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    console.log('Received request to get all pets');
    res.json(pets);
});

// Get pet by owner with query string
app.get('/api/v1/pets/owner/:ownerName', (req, res) => {
    const ownerName = req.params.ownerName;
    console.log(`Received request to get pets by owner: ${ownerName}`);
    const petsByOwner = pets.filter(pet => pet.owner.toLowerCase() === ownerName.toLowerCase());
    if (petsByOwner.length > 0) {
        res.json(petsByOwner);
    } else {
        console.log('No pets found for owner:', ownerName);
        res.status(404).send('No pets found for this owner');
    }
});

// Get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    console.log(`Received request to get pet by name: ${name}`);
    const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
    if (pet) {
        res.json(pet);
    } else {
        console.log('Pet not found:', name);
        res.status(404).send('Pet not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;
