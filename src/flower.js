class Flower {
  constructor(p, x, y) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.radius = 30;
  }

  show() {
    this.p.fill(255, 0, 200);
    this.p.ellipse(this.x, this.y, this.radius * 2, 60);
  }

}

export default Flower;
