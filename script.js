function showMessage() {
    alert("Hello! Welcome to my website!");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some interactivity when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
});