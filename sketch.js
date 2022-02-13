//Definerer variabler
let xball = 50;
let yball = 200;

let recx1 = 10;
let recy1 = 10;

let recx2 = 380;
let recy2 = 350;

let xspeed = 4;
let yspeed = 4;

let r = 13;
let score = 0;

gamestarted = 0;

function setup() {
  createCanvas(400, 450);
  background(230);
  fill("black");
}

function draw() {
  
  if (gamestarted == 0) {
    startButton = createButton("start");
    startButton.position((3 * width) / 8, height / 2 - height / 2);
    text('2 spiller pong', 50, 50);
    text('Du bruker pil tast opp og ned for høyre rekkert.', 40, 70);
    text('og "w" og "s" for venstre rekkert.', 40, 90)
    text('Dette spillet er designet for å være ett samarbeids spill,', 40, 130)
    text('det er om å gjøre å få flest mulig poeng sammen.', 40, 150)
    text('Lykke til! (trykk start for å begynne)', 40, 170)
    startButton.mousePressed(start);  
    
  } else if (gamestarted == 1) {
    //lager ballen
    background(230);
    ellipse(xball, yball, 2 * r);
    textSize(20);
    text(score, 50, 40);

    //ballen flytter seg med xspeed/yspeed
    xball += xspeed;
    yball += yspeed;

    //lager rekkertene
    rect(recx1, recy1, 10, 60);
    rect(recx2, recy2, 10, 60);

  //
    if (xball == recx1 + 20) {
      if (yball > recy1 && yball < recy1 + 60) {
        xspeed *= -1;
        score += +1;
        console.log("spretter på venstre")
      }
    }

    if (xball == recx2 - 10) {
      if (yball > recy2 && yball < recy2 + 60) {
        xspeed *= -1;
        score += +1;
        console.log("spretter på høyre")
      }
    }

  //beveger venstre rect
    if (keyIsPressed) {
      if (keyCode == 87) {
        if (recy1 > 0) recy1 -= 5;

      } else if (keyCode == 83) {
        if (recy1 < 400) recy1 += 5;
      }
    }
    
    //beveger høyre rect
    if (keyIsPressed) {
      if (keyCode == UP_ARROW) {
        if (recy2 > 0) recy2 -= 5;
      }
      if (keyCode == DOWN_ARROW) {
        if (recy2 < 400) recy2 += 5;
      }
    }  
  }
  bounce();
  function start() {
    console.log("spill startet")
    gamestarted = 1;
  }

  function bounce() {
    if (yball < 10 || yball > 440) {
      yspeed *= -1;
    }
  }

  if (xball < 10 || xball > 390) {
    background(220);
    text(score, 50, 40);
    startButton.remove();
    restartButton = createButton("RESTART");
    restartButton.position((3 * width) / 8, height / 2 - height / 2);
    restartButton.mousePressed(restart);
  }

  function restart() {
    console.log("spill startet")
    xball = 50;
    yball = 200;
    recx1 = 10;
    recy1 = 10;
    recx2 = 380;
    recy2 = 350;
    xspeed = 4;
    yspeed = 4;
    score = 0;
    restartButton.remove();
  }
}
