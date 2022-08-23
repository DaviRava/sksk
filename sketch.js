var canvas;
var backgroundImage;
var bgImg;
var database;
var form;
var player, playerCount, allPlayers;
var gameState
var carro1, carro2;
var carro1IMG, carro2IMG;
var pistaIMG;

var allCars = [];


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  carro1IMG = loadImage("./assets/car1.png");
  carro2IMG = loadImage("./assets/car2.png");
  pistaIMG = loadImage("./assets/PISTA.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update (1)
  }

  if (gameState === 1) {
    game.play()
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
