// pongGame.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'black';

    const paddleWidth = 10;
    const paddleHeight = 100;
    let leftPaddleY = canvas.height / 2 - paddleHeight / 2;
    let rightPaddleY = canvas.height / 2 - paddleHeight / 2;
    const paddleSpeed = 6;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSize = 10;
    let ballSpeedX = 6;
    let ballSpeedY = 6;
    let playerScore = 0;
    let computerScore = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#0f0";
        ctx.fillStyle = '#0f0';
        ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight); // Left paddle
        ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight); // Right paddle

        ctx.beginPath();
        ctx.shadowBlur = 10;
        ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
        ctx.fill();

        ballX += ballSpeedX;
        ballY += ballSpeedY;

        if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
            ballSpeedY = -ballSpeedY;
        }

        paddleCollision();
        computerAI();
        handleScore();

        requestAnimationFrame(draw);
    }

    function paddleCollision() {
        if (ballX - ballSize < paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            ballX = paddleWidth + ballSize;
        }
        if (ballX + ballSize > canvas.width - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            ballX = canvas.width - paddleWidth - ballSize;
        }
    }

    function computerAI() {
        if (Math.random() < 0.9) { // 90% chance to move correctly
            if (rightPaddleY + paddleHeight / 2 < ballY - 10) {
                rightPaddleY += paddleSpeed;
            } else if (rightPaddleY + paddleHeight / 2 > ballY + 10) {
                rightPaddleY -= paddleSpeed;
            }
        }
    }

    function handleScore() {
        if (ballX < 0) {
            computerScore++;
            resetBall();
        } else if (ballX > canvas.width) {
            playerScore++;
            resetBall();
        }

        ctx.fillStyle = '#0f0';
        ctx.font = '48px VT323, monospace';
        ctx.fillText(`${playerScore} - ${computerScore}`, canvas.width / 2 - 50, 50);

        if (playerScore >= 5 || computerScore >= 5) {
            displayGameOver(playerScore >= 5);
        }
    }

    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
        ballSpeedY = 6 * (Math.random() > 0.5 ? 1 : -1);
    }

    function displayGameOver(isPlayerWinner) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0f0';
        ctx.font = '48px VT323, monospace';
        ctx.fillText(isPlayerWinner ? "The Matrix has you" : "Game Over", canvas.width / 2 - 150, canvas.height / 2);
    }

    canvas.addEventListener('mousemove', function(event) {
        leftPaddleY = event.clientY - paddleHeight / 2;
    });

    draw();
});
