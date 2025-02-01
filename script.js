document.addEventListener("DOMContentLoaded", functio// Function to toggle the navigation menu in mobile view
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

// Function to handle search bar submission
function handleSearch(event) {
    event.preventDefault();
    const location = document.querySelector('.search-bar input[placeholder="Location"]').value;
    const specialty = document.querySelector('.search-bar input[placeholder="Doctor\'s Name or Specialty"]').value;
    alert(Searching for doctors in ${location} specializing in ${specialty}.);
}

// Function to handle newsletter form submission
function handleNewsletterSubmission(event) {
    event.preventDefault();
    const email = document.querySelector('.newsletter input').value;
    alert(Thank you for subscribing with email: ${email});
}

// Add event listeners for the search bar and newsletter form
document.querySelector('.search-bar button').addEventListener('click', handleSearch);
document.querySelector('.newsletter form').addEventListener('submit', handleNewsletterSubmission);

// Add event listener for the menu button (mobile view)
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

// Event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});n() {
    // Example of JavaScript code if needed for further interactions
});
