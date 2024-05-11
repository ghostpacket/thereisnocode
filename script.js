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
});

document.getElementById('createAccount').addEventListener('click', function() {
    console.log('Navigate to registration form');
    // window.location.href = 'register.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    document.querySelector('.matrix-effect').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).fill(1).map((_, i) => String.fromCharCode(i));
    let fontSize = 16;
    let columns = canvas.width / fontSize;

    let drops = new Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0'; // Green text
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
});
