document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/pets')
    .then(response => response.json())
    .then(data => {
        const petsContainer = document.createElement('div');
        data.forEach(pet => {
            const petDiv = document.createElement('div');
            petDiv.textContent = `${pet.name} - ${pet.breed}`;
            petsContainer.appendChild(petDiv);
        });
        document.body.appendChild(petsContainer);
    });
});
