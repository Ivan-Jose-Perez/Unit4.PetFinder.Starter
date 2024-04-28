document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/pets')
    .then(response => response.json())
    .then(pets => {
        const petsContainer = document.getElementById('pets-container');
        petsContainer.innerHTML = ''; // Clear previous results
        pets.forEach(pet => {
            const petDiv = document.createElement('div');
            petDiv.textContent = `${pet.name} - ${pet.breed}`;
            petsContainer.appendChild(petDiv);
        });
    })
    .catch(error => console.error('Error fetching pets:', error));
});