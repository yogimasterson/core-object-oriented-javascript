Object.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
  ctx.font = '25px Arial Black'
  ctx.fillText(`SCORE: ${player.score}`,365,824)
  ctx.fillText(`LIVES: ${player.lives}`,12,824)
  if(player.lives === 0) {
    ctx.font = '60px Arial Black'
    ctx.fillStyle = 'RED'
    ctx.fillText(`YOU LOSE`,80,110)
    setTimeout(function() {
      window.location.reload()
    }, 2000)
  }
}

let music = new Audio('sounds/music.mp3')
  music.play()
let jab = new Audio('sounds/jab.mp3');
let jump = new Audio('sounds/jump.mp3');
let shootingStar = new Audio('sounds/shooting-star.mp3');
let splash = new Audio('sounds/splash.mp3');
let gameOver = new Audio('sounds/game-over.mp3');

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
      player.lives--
      jab.play()
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
      player.lives--
      jab.play()
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
      player.lives--
      jab.play()
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
      player.lives--
      jab.play()
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

class DeadPlayer {
  constructor() {
    this.x = -500
    this.y = -500
    this.sprite = 'images/char-horn-girl-dead.png'
  }

  update(dt) {
    if(player.lives === 0) {
      this.x = 40
      this.y = 300
      gameOver.play()
    }
  }
}

const deadPlayer = new DeadPlayer()

class Player {
  constructor() {
    this.x = 200
    this.y = 630
    this.score = 0
    this.lives = 3
    this.sprite = 'images/char-horn-girl.png';
  }

  reset() {
    this.x = 200
    this.y = 630
  }

  update(dt) {
    if(this.playerInput === 'left' && this.x > 0) {
      this.x = this.x - 101
      jump.play()
    } else if(this.playerInput === 'right' && this.x < 400) {
      this.x = this.x + 101
      jump.play()
    } else if(this.playerInput === 'up') {
      this.y = this.y - 80
      jump.play()
    } else if(this.playerInput === 'down' && this.y < 630) {
      this.y = this.y + 80
      jump.play()
    }

    this.playerInput = null

    if (this.y < -20) {
      this.reset()
      this.score++
      shootingStar.play()
    }

    if (this.x >= -101 && this.x <= 0 || this.x >= 101 && this.x <= 202 || this.x >= 303 && this.x <= 404) {
      if (this.y >= 41.9 && this.y <= 209.5) {
      this.reset()
      player.lives--
      splash.play()
      }
    }
  }

  handleInput(e) {
    this.playerInput = e
  }
}

const player = new Player()

document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
