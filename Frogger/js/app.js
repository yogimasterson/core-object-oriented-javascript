Object.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
  ctx.font = '25px Arial Black'
  ctx.fillText(`SCORE: ${player.score}`,365,824)
  ctx.fillText(`LIVES: ${player.lives}`,12,824)
}

// let collision = null
//
// class WoodLogForward {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//     this.speed = 150
//     this.sprite = 'images/log.png';
//   }
//
//   update(dt) {
//     if(this.x <= 600) {
//       this.x += this.speed * dt
//     } else {
//       this.x = -800
//     }
//     if (player.x >= this.x - 30 && player.x <= this.x + 110) {
//       if (player.y >= this.y - 30 && player.y <= this.y + 90) {
//       collision = false
//       }
//     }
//   }
// }
//
// class WoodLogBackward {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//     this.speed = 100
//     this.sprite = 'images/log.png';
//   }
//
//   update(dt) {
//     if(this.x >= -200) {
//       this.x -= this.speed * dt
//     } else {
//       this.x = 1500
//     }
//     if (player.x >= this.x - 30 && player.x <= this.x + 110) {
//       if (player.y >= this.y - 30 && player.y <= this.y + 90) {
//       collision = false
//       }
//     }
//   }
// }
//
// const allLogs = [];
// allLogs.push(new WoodLogForward(-50, 130))
// allLogs.push(new WoodLogForward(-200, 130))
// allLogs.push(new WoodLogForward(-350, 130))
// allLogs.push(new WoodLogForward(-800, 130))
// allLogs.push(new WoodLogBackward(1150, 40))
// allLogs.push(new WoodLogBackward(1000, 40))
// allLogs.push(new WoodLogBackward(650, 40))
// allLogs.push(new WoodLogBackward(500, 40))
// allLogs.push(new WoodLogBackward(1500, 40))

class FlyFishForward {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.speed = Math.floor((Math.random() * 100) + 100)
    this.sprite = 'images/baby-fish-T.png';
  }
  update(dt) {
    if(this.x <= 800) {
      this.x += this.speed * dt
    } else {
      this.x = -200
    }
    if (player.x >= this.x - 30 && player.x <= this.x + 30) {
      if (player.y >= this.y - 30 && player.y <= this.y + 30) {
      player.reset()
      }
    }
  }
}

class FlyFishBackward {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.speed = Math.floor((Math.random() * 150) + 100)
    this.sprite = 'images/baby-fish-T-backward.png';
  }
  update(dt) {
    if(this.x >= -200) {
      this.x -= this.speed * dt
    } else {
      this.x = 800
    }
    if (player.x >= this.x - 30 && player.x <= this.x + 30) {
      if (player.y >= this.y - 30 && player.y <= this.y + 30) {
      player.reset()
      }
    }
  }
}

const allFlyFish = [];
allFlyFish.push(new FlyFishForward(-100, 100))
allFlyFish.push(new FlyFishForward(-200, 100))
allFlyFish.push(new FlyFishForward(-360, 100))
allFlyFish.push(new FlyFishBackward(600, 180))
allFlyFish.push(new FlyFishBackward(800, 180))

class Rock {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.sprite = 'images/Rock.png';
  }
}

const allRocks = [];
allRocks.push(new Rock(101, 60))
allRocks.push(new Rock(101, 140))
allRocks.push(new Rock(303, 60))
allRocks.push(new Rock(303, 140))

class EnemyForward {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.speed = Math.floor((Math.random() * 100) + 100)
    this.sprite = 'images/enemy-bug.png';
  }
  update(dt) {
    if(this.x <= 800) {
      this.x += this.speed * dt
    } else {
      this.x = -200
    }
    if (player.x >= this.x - 30 && player.x <= this.x + 30) {
      if (player.y >= this.y - 30 && player.y <= this.y + 30) {
      player.reset()
      }
    }
  }
}

class EnemyBackward {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.speed = Math.floor((Math.random() * 150) + 50)
    this.sprite = 'images/enemy-bug-backward.png';
  }

  update(dt) {

    if(this.x >= -200) {
      this.x -= this.speed * dt
    } else {
      this.x = 800
    }
    if (player.x >= this.x - 30 && player.x <= this.x + 30) {
      if (player.y >= this.y - 30 && player.y <= this.y + 30) {
      player.reset()
      }
    }
  }
}

const allEnemies = [];
allEnemies.push(new EnemyBackward(600, 230))
allEnemies.push(new EnemyBackward(900, 230))
allEnemies.push(new EnemyForward(-200, 310))
allEnemies.push(new EnemyForward(-300, 310))
allEnemies.push(new EnemyBackward(700, 390))
allEnemies.push(new EnemyBackward(800, 390))
allEnemies.push(new EnemyBackward(1200, 390))
allEnemies.push(new EnemyForward(-150, 475))
allEnemies.push(new EnemyForward(-300, 475))


class Player {
  constructor() {
    this.x = 200
    this.y = 630
    this.score = 0
    this.lives = 9
    this.sprite = 'images/char-horn-girl.png';
  }

  reset() {
    this.x = 200
    this.y = 630
  }

  update(dt) {
    if(this.playerInput === 'left' && this.x > 0) {
      this.x = this.x - 101
    } else if(this.playerInput === 'right' && this.x < 400) {
      this.x = this.x + 101
    } else if(this.playerInput === 'up') {
      this.y = this.y - 80
    } else if(this.playerInput === 'down' && this.y < 630) {
      this.y = this.y + 80
    }

    this.playerInput = null

    if (this.y < -20) {
      this.reset()
    }
  }

  handleInput(e) {
    this.playerInput = e
  }
}

var player = new Player()


document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
