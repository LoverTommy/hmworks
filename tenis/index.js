let leftNum = document.getElementById('leftNum');
let rightNum = document.getElementById('rightNum');
let leftNumber = leftNum.innerHTML;
let rightNumber = rightNum.innerHTML;

let timer = true;

const randMoveX = [2,-2];
const randMoveY = [1,-1]


let shiftPressed = false;
let controlPressed = false;
let arrowUpPressed = false;
let arrowDownPressed = false;

function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

document.addEventListener('keydown', function(eo) {
  if (eo.code === 'ShiftLeft') {
      shiftPressed = true;
  } else if (eo.code === 'ControlLeft') {
      controlPressed = true;
  } else if (eo.code === 'ArrowUp') {
      arrowUpPressed = true;
  } else if (eo.code === 'ArrowDown') {
      arrowDownPressed = true;
  }
});

document.addEventListener('keyup', function(eo) {
  if (eo.code === 'ShiftLeft') {
      shiftPressed = false;
  } else if (eo.code === 'ControlLeft') {
      controlPressed = false;
  } else if (eo.code === 'ArrowUp') {
      arrowUpPressed = false;
  } else if (eo.code === 'ArrowDown') {
      arrowDownPressed = false;
  }
});

function moveElements() {
  if (shiftPressed) {
      leftItemH.speedY = -2;
  } else if (controlPressed) {
      leftItemH.speedY = 2;
  } else {
      leftItemH.speedY = 0;
  }

  if (arrowUpPressed) {
      rightItemH.speedY = -2;
  } else if (arrowDownPressed) {
      rightItemH.speedY = 2;
  } else {
      rightItemH.speedY = 0;
  }
}

let ballH = {
  posX: 380,
  posY: 210,
  speedX: 2,
  speedY: 1,
  width: 50,
  height: 50,
  ballX: 0,
  ballY: 0,
  ballR: 25,

  update: function () {
    const ballElem = document.getElementById("ball");
    ballElem.style.left = this.posX + "px";
    ballElem.style.top = this.posY + "px";
    this.ballX = this.posX + 25;
    this.ballY = this.posY + 25;
  },
};

let leftItemH = {
  posY: 170,
  speedY: 0,
  height: 120,
  width: 12,

  update: function() {
    const leftItem = document.getElementById('leftItem');
    leftItem.style.top = this.posY + 'px';
  }
}

let rightItemH = {
  posX: 788,
  posY: 170,
  speedY: 0,
  height: 120,
  width: 12,

  update: function() {
    const rightItem = document.getElementById('rightItem');
    rightItem.style.top = this.posY + 'px';
  }
}

let areaH = {
  width: 800,
  height: 500,
};

function start() {
  let randPosX = randMoveX[randomDiap(0,1)];
  let randPosY = randMoveX[randomDiap(0,1)];
  ballH.posX = 380;
  ballH.posY = 210;
  ballH.speedX = randPosX;
  ballH.speedY = randPosY;

  if(timer) {
    setInterval(tick, 10);
    timer = false;
  }
}

function tick() {
  ballH.posX += ballH.speedX;

  if (ballH.posX + ballH.width > areaH.width) {
    ballH.speedX = 0;
    ballH.speedY = 0;
    ballH.posX = areaH.width - ballH.width;

    leftNumber = Number(leftNum.innerHTML);
    leftNum.innerHTML = Number(leftNumber + 1);
  }

  if (ballH.posX < 0) {
    ballH.speedX = 0;
    ballH.speedY = 0;
    ballH.posX = 0;

    rightNumber = Number(rightNum.innerHTML);
    rightNum.innerHTML = Number(rightNumber + 1);
  }
  ballH.posY += ballH.speedY;

  if (ballH.posY + ballH.height > areaH.height) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = areaH.height - ballH.height;
  }

  if (ballH.posY < 0) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = 0;
  }

  leftItemH.posY += leftItemH.speedY;
  rightItemH.posY += rightItemH.speedY;

  if(leftItemH.posY < 0) {
    leftItemH.speedY = -leftItemH.speedY;
    leftItemH.posY = 0;
  }

  if(leftItemH.posY + leftItemH.height > areaH.height) {
    leftItemH.speedY = -leftItemH.speedY
    leftItemH.posY = areaH.height - leftItemH.height
  }

  if(rightItemH.posY < 0) {
    rightItemH.speedY = -rightItemH.speedY;
    rightItemH.posY = 0;
  }

  if(rightItemH.posY + rightItemH.height > areaH.height) {
    rightItemH.speedY = -rightItemH.speedY;
    rightItemH.posY = areaH.height - leftItemH.height;
  }

  if(ballH.ballY >= leftItemH.posY && ballH.ballY <= leftItemH.posY+leftItemH.height && ballH.ballX-ballH.ballR<=leftItemH.width) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = 12;
    ballH.posX += ballH.speedX;
  }

  if(ballH.ballY >= rightItemH.posY && ballH.ballY <= rightItemH.posY+rightItemH.height && ballH.ballX+ballH.ballR>=rightItemH.posX) {
    ballH.speedX = -ballH.speedX;
    ballH.posX = areaH.width - ballH.width - 12;
    ballH.posX += ballH.speedX;
  }

  moveElements();
  rightItemH.update();
  leftItemH.update();
  ballH.update();
}

moveElements();
ballH.update();
