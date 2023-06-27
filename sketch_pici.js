let windowPadding = 0;

let config = true;

// GRID
let cols, rows;
let grids = [];

let gridUnit = 80;

let gridPadding = 0;

// SHAPE
let totalShapes;
let shapes = [];

let sizeLimitX = 8;

let sizeLimitY = 2;

let percentToShow = 50;

let bgImage;

let bgColor;
let colorOpacityOne = 255;
let colorOpacityTwo = 0;

let colorA = [];
let colorZ = [];

let purple = true;
let gray = true;
let white = true;
let orange = true;
let blueC = true;
let greenC = true;
let redC = true;

let deleteCount = 0;
let graphicCount = 0;

let pg = [];

let newImageTicker = 0;

let staticSave = false;

function preload(){
  bgImage = loadImage("resources/roberta.jpg")
}

function setup() {
  holdWidth = bgImage.width;
  holdHeight = bgImage.height;
  // createCanvas(windowWidth, windowHeight);
  createCanvas(holdWidth, holdHeight);

  bgColor = color('#000000');
  //////// SOLID COLORS
  colorA[0] = color(104,91,199);    // PURPLE
  colorA[1] = color(167,168,170);   // GRAY
  colorA[2] = color(255);           // WHITE
  colorA[3] = color(255,108,47);    // ORANGE
  colorA[4] = color(0,131,195);     // BLUE
  colorA[5] = color(0,172,140);     // GREEN
  colorA[6] = color(246,80,88);     // RED

  //////// TRANSPARENT COLORS
  colorZ[0] = color(104,91,199, 0);    // PURPLE
  colorZ[1] = color(167,168,170,  0);   // GRAY
  colorZ[2] = color(255, 0);           // WHITE
  colorZ[3] = color(255,108,47, 0);    // ORANGE
  colorZ[4] = color(0,131,195, 0);     // BLUE
  colorZ[5] = color(0,172,140, 0);     // GREEN
  colorZ[6] = color(246,80,88, 0);     // RED

  smooth(16);

  frameRate(4);

  noStroke();
}

function draw() {
  clear();
  background(255);

  // print("new Image is: =>");
  // print(bgImage);
  image(bgImage, 0, 0);

  if (config) {
    configure();
    config = false;
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grids[x][y].display(x, y, gridUnit); 
    }
  }

  if(staticSave){
    save('PICI.jpg');
    staticSave = false;
  }

  if(newImageTicker == 2){
    noLoop();
  } else {
    loop();
    newImageTicker ++;
  }

}

function randomBool() {
  return random(1) > .5;
}