const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');
const icon = document.getElementById('icon');
const ul = document.querySelector('nav ul');

// Function to toggle navigation bar
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
    ul.classList.toggle('show-menu');
};

// Function to set the initial theme based on localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
});

// Function to toggle light and dark mode
icon.onclick = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            this.reset();
        } else {
            alert('Failed to send email. Please try again.');
        }
    }).catch(error => {
        alert('An error occurred. Please try again.');
    });
});