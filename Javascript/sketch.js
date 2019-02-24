let leaves = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('leavesimg.png');
}

function setup() {
  canvas = createCanvas(windowWidth - 4, windowHeight - 4);
  canvas.parent('sketch-holder');
  gravity = createVector(0, 1);

  for (let x = 0; x < spritesheet.width; x += 108) {
    for (let y = 0; y < spritesheet.height; y += 108) {
      let img = spritesheet.get(x, y, 108, 108);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(-200, -500);
    let design = random(textures);
    leaves.push(new Leaf(x, y, design));
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}

function draw() {
  background(242);

  zOff += 0.001;

  for (leaf of leaves) {
    let xOff = leaf.pos.x / width;
    let yOff = leaf.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);

    leaf.applyForce(gravity);
    leaf.applyForce(wind);
    leaf.update();
    leaf.render();
  }
}