document.addEventListener("DOMContentLoaded", function() {
    // Search button functionality
    const searchButton = document.querySelector(".search-bar button");
    searchButton.addEventListener("click", function() {
        alert("Search functionality is not yet implemented.");
    });

    // Newsletter subscription validation
    const subscribeButton = document.querySelector(".newsletter button");
    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault();
        const emailInput = document.querySelector(".newsletter input[type='email']");
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (emailPattern.test(email)) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email address.");
        }
    });
});