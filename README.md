# Workshop: Backend Fundamentals - Pet Finder

## Introduction

In this workshop, you'll be provided this GitHub repo with details for a full operational CRUD API that uses Express.JS, PostgreSQL, and other technologies that you've been trained on.

## Problems to Solve

Begin this Career Simulation by cloning the GitHub repo, pseudocoding prompts, installing dependencies and solving the problems below.

### Problem 1: GET all pets

The GET route for all pets is currently "under construction". Navigate to `index.js` and find the GET method at `/api/v1/pets` and write the code to get all pets from the database.

<!-- My Answer:
1.	Start GET request at endpoint /api/v1/pets
2.	Fetch all pets from the database
3.	Return all pets as a JSON response
4.	End GET request

app.get('/api/v1/pets', (req, res) => {
    res.json(petsDatabase);
});

 -->

### Problem 2: GET pets by name

The GET route for pets by name is currently "under construction". Navigate to `index.js` and find the GET method at `/api/v1/pets/:name` and write the code to get a pet by name from the database.

<!-- My Answer:
1.	Start GET request at endpoint /api/v1/pets/:name
2.	Extract 'name' from the route parameter
3.	Search for the pet by name in the database
4.	If pet is found, return it as JSON
5.	If pet is not found, return a 404 error
6.	End GET request

app.get('/api/v1/pets/:name', (req, res) => {
    const { name } = req.params;
    const pet = petsDatabase.find(pet => pet.name === name);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});
 -->

### Problem 3: GET pet by owner's name with a query string

The GET route for pets by owner's name is currently "under construction". Navigate to `index.js` and find the GET method at `/api/v1/pets/owner` and write the code to get a pet by owner's name from the database.

<!-- My Answer:
1.	Start GET request at endpoint /api/v1/pets/owner
2.	Extract 'ownerName' from the query string
3.	Search for pets by owner's name in the database
4.	Return all matching pets as JSON
5.	End GET request

app.get('/api/v1/pets/owner', (req, res) => {
    const { ownerName } = req.query;
    const pets = petsDatabase.filter(pet => pet.owner === ownerName);
    if (pets.length > 0) {
        res.json(pets);
    } else {
        res.status(404).send('No pets found for this owner');
    }
});
 -->

### STRETCH GOAL: Problem 4: Serve a static index.html file

The GET route for serving a static index.html file is currently "under construction". Navigate to `index.js` and find the GET method at `/` and write the code to serve a static index.html file.

<!-- My answer:
1.	Start GET request at endpoint /
2.	Serve the static index.html file from the 'public' directory
3.	Use path module to resolve file path
4.	End GET request

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 -->

### Endpoints

Port 8080 by default.

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /                  | Serve a static index.html file |
| GET    | /api               | Returns 'Hello World!'         |
| GET    | /api/v1/pets       | Get all pets                   |
| GET    | /api/v1/pets/:name | Get a pet by name              |
| GET    | /api/v1/pets/owner | Get a pet by owner's name      |
