class Bullet {
  constructor(p, x, y) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.isDelete = false;
  }

  show() {
    this.p.fill(50, 0, 200);
    this.p.rect(this.x, this.y, this.width, 10);
  }

  move() {
    this.y = this.y - 5;
  }

  hits(flower) {
    const distance = this.p.dist(this.x, this.y, flower.x, flower.y);

    return (distance < this.width/2 + flower.radius);
  }

  delete() {
    this.isDelete = true;
  }

}

export default Bullet;
