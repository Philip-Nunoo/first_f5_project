import Ship from './ship';
import Flower from './flower';
import Bullet from './bullet';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const SPACE_BAR = 32;

const App = (p) => {
  let ship, bullets = [], flowers = [];

  p.setup = () => {
    p.createCanvas(600, 400);
    ship = new Ship(p);

    for (var i = 0; i < 5; i++) {
      flowers[i] = new Flower(p, i*60+60, 60);
    }
  }

  p.draw = () => {
    p.background(0);
    ship.show();
    ship.move();


    for (var i = bullets.length - 1; i >= 0 ; i--) {
      bullets[i].show();
      bullets[i].move();

      for (var j = 0; j < flowers.length; j++) {
        if (bullets[i].hits(flowers[j])) {
          flowers.splice(j, 1);
          bullets.splice(i, 1);
          console.log("Collision");
          return;
        }
        if(bullets[i].y === -10) {
          bullets[i].delete();
        }
      }
    }

    for (var i = bullets.length - 1; i >= 0; i--) {
      if (bullets[i].isDelete) {
        bullets.splice(i, 1);
      };
    }

    for (var i = 0; i < flowers.length; i++) {
      flowers[i].show();
    }
  }

  p.keyPressed = () => {
    switch (p.keyCode) {
      case RIGHT_ARROW:
        ship.setDirection(1);
        break;
      case LEFT_ARROW:
        ship.setDirection(-1);
        break;
      case SPACE_BAR:
        bullets.push(new Bullet(p, ship.x + 10, p.height));
        break;
      default:
        return;

    }
  }

  p.keyReleased = () => {
    if (p.keyCode != SPACE_BAR) {
      ship.setDirection(0);
    }
  }

}

export default App;
