// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from local storage
    var storedUser = localStorage.getItem('user');
    var userData = storedUser ? JSON.parse(storedUser) : {};

    if(username === userData.username && password === userData.password) {
        console.log('Login successful', username);
        // Redirect to a different page or change the UI upon successful login
        window.location.href = 'welcome.html'; // Redirect to a welcome page or dashboard
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
