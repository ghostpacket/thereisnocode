// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username.trim() === '' || password.trim() === '') {
        document.getElementById('error-message').textContent = 'Username and password are required!';
        return;
    }

    console.log('Logging in', username, password);
    // Typically you'd send a request to your server here
});

document.getElementById('createAccount').addEventListener('click', function() {
    window.location.href = 'register.html'; // Ensures redirection to the registration page
});
