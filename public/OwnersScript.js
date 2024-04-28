document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/owners')
    .then(response => response.json())
    .then(owners => {
        const petsContainer = document.getElementById('pets-container');
        petsContainer.innerHTML = ''; // Clear previous results
        owners.forEach(owner => {
            const ownerDiv = document.createElement('div');
            ownerDiv.textContent = `${owner.owner} - Contact: ${owner.contact}`;
            petsContainer.appendChild(ownerDiv);
        });
    })
    .catch(error => console.error('Error fetching owners:', error));
});