// Map of aliases to their corresponding README URLs
const readmeFiles = {
    "My First README": 'https://github.com/kayyazka/readme-collection/blob/main/readme/README1.md',
    "My Second README": 'https://github.com/kayyazka/readme-collection/blob/main/readme/README2.md',
    "My Third README": 'https://github.com/kayyazka/readme-collection/blob/main/readme/README3.md'
}; // Add more aliases and file URLs here

const buttonList = document.getElementById('buttonList');

// Function to handle button click and open in a new tab
function handleButtonClick(url) {
    // Open the specified URL in a new tab
    window.open(url, '_blank'); // Open in a new tab
}

// Function to dynamically generate buttons listed down
function createButtons() {
    Object.entries(readmeFiles).forEach(([alias, url]) => {
        const button = document.createElement('button');
        button.innerHTML = `<i class="fas fa-book"></i> ${alias}`; // Use the alias for button text
        button.addEventListener('click', () => handleButtonClick(url)); // Add click event
        buttonList.appendChild(button); // Append the button to the list
    });
}

// Call the function to generate buttons on page load
createButtons();
