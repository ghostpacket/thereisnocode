// matrixEffect.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.querySelector('.matrix-effect').appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";

    // Using a mix of Katakana and other symbols for the Matrix effect
    const characters = "アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルをエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴッン1234567890!@#$%^&*";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(canvas.height + 1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Classic Matrix green
        ctx.font = `${fontSize}px 'VT323', monospace`; // Applying VT323 font here

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        setTimeout(() => requestAnimationFrame(draw), 50); // Control the update speed here
    }

    draw();
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const new_columns = canvas.width / fontSize;
        drops.length = new_columns;
        drops.fill(canvas.height + 1);
    });
});
