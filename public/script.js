document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/pets')
    .then(response => response.json())
    .then(data => {
        const petsContainer = document.getElementById('pets-container'); // Add this ID exists in your index.html
        // Create HTML for each pet
        data.forEach(pet => {
            const petDiv = document.createElement('div');
            petDiv.textContent = `${pet.name} - ${pet.breed}`;
            petsContainer.appendChild(petDiv);
        });
    })
    .catch(error => console.error('Error fetching pets:', error)); // Handle any errors
});
