document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch pets by owner
    const fetchPetsByOwner = () => {
        const ownerName = document.getElementById('owner-name').value;
        fetch(`/api/v1/pets/owner/${ownerName}`)
        .then(response => response.json())
        .then(updatePetsDisplay)
        .catch(error => console.error('Error fetching pets by owner:', error));
    };

    // Function to fetch pet by name
    const fetchPetByName = () => {
        const petName = document.getElementById('pet-name').value;
        fetch(`/api/v1/pets/${petName}`)
        .then(response => response.json())
        .then(pet => updatePetsDisplay([pet])) // wrap single pet in an array for consistency
        .catch(error => console.error('Error fetching pet by name:', error));
    };

    // Helper function to update the display of pets
    const updatePetsDisplay = (pets) => {
        const petsContainer = document.getElementById('pets-container');
        petsContainer.innerHTML = ''; // Clear previous results
        pets.forEach(pet => {
            const petDiv = document.createElement('div');
            petDiv.textContent = `${pet.name} - ${pet.breed}`;
            petsContainer.appendChild(petDiv);
        });
    };

    // Make functions globally available
    window.fetchPetsByOwner = fetchPetsByOwner;
    window.fetchPetByName = fetchPetByName;
});

