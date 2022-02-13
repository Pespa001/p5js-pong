//Definerer variabler
let xball = 50;
let yball = 200;
let recx1 = 10;
let recy1 = 10;
let recx2 = 380;
let recy2 = 350;
let xspeed = 5;
let yspeed = 5;
let r = 13;
var score = 0;
gamestarted = 0;

function setup() {
  createCanvas(400, 450);
  background(230);
  fill("black");
}

function draw() {
  if (gamestarted == 0) {
    startButton = createButton("start");
    startButton.position((2 * width) / 8, height / 2 - height / 2);
    startButton.mousePressed(start);
  } else if (gamestarted == 1) {
    //lager ballen
    startButton.remove();
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

    viewButton = createButton("Vis leaderboard");
    viewButton.position((3 * width) / 8, height / 2 - height / 2);
    viewButton.mousePressed(visScoreboard);

    if (xball == recx1 + 20) {
      if (yball > recy1 && yball < recy1 + 60) {
        xspeed *= -1;
        score += +1;
      }
    }

    if (xball == recx2 - 10) {
      if (yball > recy2 && yball < recy2 + 60) {
        xspeed *= -1;
        score += +1;
      }
    }

    //beveger venstre rect
    if (keyIsPressed) {
      if (keyCode == 87) {
        if (recy1 > 0) recy1 -= 5;
        console.log(recy1);
      } else if (keyCode == 83) {
        if (recy1 < 400) recy1 += 5;
        console.log(recy1);
      }
    }

    //beveger høyre rect
    if (keyIsPressed) {
      if (keyCode == UP_ARROW) {
        if (recy2 > 0) recy2 -= 5;
        console.log(recy2);
      }
      if (keyCode == DOWN_ARROW) {
        if (recy2 < 400) recy2 += 5;
        console.log(recy2);
      }
    }
    //funksjoner
    bounce();
  }

  function visScoreboard() {
    viewButton.remove();
    saveButton = createButton("Save");
    saveButton.position(width / 20, height / 20);
    saveButton.mousePressed(saveScore);
    closeButton = createButton("Close");
    closeButton.position(width / 6, height / 20);
    closeButton.mousePressed(closeScore);
  }

  function saveScore() {
    echo("leaderboard", "txt");
  }

  function closeScore() {
    saveButton.remove();
    closeButton.remove();
  }

  function start() {
    gamestarted = 1;
  }

  function bounce() {
    if (yball < 10 || yball > 440) {
      yspeed *= -1;
    }
  }

  if (xball < 10 || xball > 390) {
    console.log("restart");

    let xball = 50;
    let yball = 200;
    let recx1 = 10;
    let recy1 = 10;
    let recx2 = 380;
    let recy2 = 350;
    restartButton = createButton("RESTART");
    restartButton.position(200, 200, 200);
    //while (not restartButton.mousePressed() ) { Do nothing  }
  }
}
