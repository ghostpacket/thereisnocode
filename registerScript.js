// registerScript.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
        document.getElementById('error-message').textContent = 'Please fill out all fields!';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = 'Passwords do not match!';
        return;
    }

    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    // Redirect to login page after registration
    window.location.href = 'index.html';
});
