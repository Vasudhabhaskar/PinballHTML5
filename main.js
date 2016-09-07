function drawLine(startX, startY, endX, endY, lineWidth){
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
    ctx.lineWidth = lineWidth;
	ctx.stroke();
};

function drawCanvas(paddle1X, paddle1Y, paddle2X, paddle2Y){
    padLX = paddle1X;
    padLY = paddle1Y;
    padRX = paddle2X;
    padRY = paddle2Y;
    drawLine(560, 50, 560, 930, 13);
    drawLine(510, 700, 510, 930, 13);
    drawLine(50, 700, 50, 930, 13);
    ctx.closePath();
    ctx.beginPath();
    drawLine(50, 740, paddle1X, paddle1Y, 20);
    drawLine(paddle2X, paddle2Y, 510, 740, 20);
    ctx.closePath();
};

function drawPaddle1(paddle1X, paddle1Y){
    padLX = paddle1X;
    padLY = paddle1Y;
    drawLine(560, 50, 560, 930, 13);
    drawLine(510, 700, 510, 930, 13);
    drawLine(50, 700, 50, 930, 13);
    ctx.closePath();
    ctx.beginPath();
    drawLine(50, 740, paddle1X, paddle1Y, 20);
    drawLine(padRX, padRY, 510, 740, 20);
    ctx.closePath();
}

function drawPaddle2(paddle2X, paddle2Y){
    padRX = paddle2X;
    padRY = paddle2Y;
    drawLine(560, 50, 560, 930, 13);
    drawLine(510, 700, 510, 930, 13);
    drawLine(50, 700, 50, 930, 13);
    ctx.closePath();
    ctx.beginPath();
    drawLine(50, 740, padLX, padLY, 20);
    drawLine(paddle2X, paddle2Y, 510, 740, 20);
    ctx.closePath();
}

function drawBall(){
    requestAnimationFrame(drawBall);
    ctxBall.save();
    ctxBall.clearRect(0, 0, 600, 930);
    ctxBall.restore();
    ballX += xunits;
    ballY += yunits;
    
    ctxBall.beginPath();
    ctxBall.fillStyle="#000000";
    ctxBall.arc(ballX,ballY,16,0,Math.PI*2,true); 
    ctxBall.closePath();
    ctxBall.fill();

    if(ballX > 550 || ballX < 0){
        angle = 180 - angle;
        updateBall();
    }
    if(ballY > 830 || ballY < 0){
        angle = 360 - angle;
        updateBall();
    }
}

function updateBall() {
    radians = angle * Math.PI/ 180;
    xunits = Math.cos(radians) * speed;
    yunits = Math.sin(radians) * speed;
}

var c = document.getElementById("outerCan");
var ctx = c.getContext("2d");
var ball = document.getElementById("ballCan");
var ctxBall = ball.getContext("2d");
var padLX = 250;
var padLY = 780;
var padRX = 310;
var padRY = 780;
var ballX = 100;
var ballY = 100;
var speed = 5;
var xunits = 0;
var yunits = 0;
var angle = 35;
updateBall();
drawBall();
drawCanvas(padLX, padLY, padRX, padRY);





document.addEventListener('keydown', function(event) {
    //left
    if((event.keyCode || event.which) == 90) {
        
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle1(270, 700);
    }
    //right
    else if((event.keyCode || event.which) == 191) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle2(290, 700);
    }
    
});

document.addEventListener('keyup', function(event) {
    //left
    if((event.keyCode || event.which) == 90) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle1(250, 780);
    }
    //right
    else if((event.keyCode || event.which) == 191) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle2(310, 780);
    }   
});



