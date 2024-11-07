// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills Progress Bars Animation
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#home .skills');
    const skillsBars = document.querySelectorAll('.skills-bar');
    
    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        skillsBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-skill-level') + '%';
        });
    }
});

// Responsive Navbar Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("All fields are required!");
        e.preventDefault();
    } else if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});

function validateEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}
