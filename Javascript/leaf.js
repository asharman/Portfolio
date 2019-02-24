function getRandomSize() {
  let r = pow(random(1), .5);
  return constrain(r * 64, 24, 64);
}

class Leaf {
  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(-10, -100);
    this.img = img;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 5);
    this.acc = createVector();
    this.angle = random(TWO_PI);
    this.dir = (random(1) > 0.5) ? 1 : -1;
    this.xOff = 0;
    this.r = getRandomSize();
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);

    this.acc.add(f);
  }

  update() {

    this.xOff = sin(this.angle) * this.r;

    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.1);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize();
    }

    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > this.r + width) {
      this.pos.x = -this.r;
    }

    this.angle += this.dir * this.vel.mag() / 200;
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 5);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  // offScreen() {
  //   return (this.pos.y > height + this.r);
  // }

  render() {
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x, this.pos.y);
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();

  }
}