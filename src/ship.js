class Ship {
  constructor(p) {
    this.p = p;
    this.x = p.width/2;
    this.xdir = 0;
  }

  show() {
    this.p.fill(255);
    this.p.rect(this.x, this.p.height-20, 30, 60);
  }

  move(dir) {
    this.x += this.xdir * 5;
  }

  setDirection(dir) {
    this.xdir = dir;
  }
}

export default Ship;
