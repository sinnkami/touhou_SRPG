class Game_Manager {
  constructor(class_data) {
    class_data.forEach((value) => {
      let name = value.constructor.name.split("_");
      this[name[0]] = value;
    })

    this.FPS = 60;
    this.update = false;
    this.GameStart = false;
    this.animation = false;
    this.FrameCount = 0;
    this.menbersLength = 4;

    this.mainInterval = null;
  }

  start() {
    this.update = true;
    this.GameStart = true;
    this.Game.Menbers.set("ReimuHakurei");
    this.mainInterval = this.main_loop();
  }

  main_loop() {
    return setInterval(() => {
      this.FrameCount++;
      this.Game.Key.keydown();
      if (this.view) {
        this.view = !Manager.Sprite.Map.allDraw("test");
      }

      if (!this.animation){ this.event(); }
      this.Game.Key.keyup();
      stats.update();
    }, 1000/this.FPS);
  }

  event() {
    const num = 0; //キャラ番号
    var input = this.Game.Key.input;
    var player = this.Game.Menbers.get(num);
    if (input.up) {
      if (player.move(0, -1)) {
        this.animation = true;
        var count = 0;
        var move = setInterval(() => {
          count++;
          this.Sprite.Player.clear(num);
          if (player.animationNumber > 2.9) {
            player.animationNumber = 0;
          }else {
            player.animationNumber += 0.05;
          }
          player.y--;
          this.Sprite.Player.draw(player.x, player.y, num);
          if (count === 32) { clearInterval(move); this.animation = false; }
        }, 2);
      }
    }else if (input.down) {
      if (player.move(0, 1)) {
        this.animation = true;
        var count = 0;
        var move = setInterval(() => {
          count++;
          this.Sprite.Player.clear(num);
          if (player.animationNumber > 2.9) {
            player.animationNumber = 0;
          }else {
            player.animationNumber += 0.05;
          }
          player.y++;
          this.Sprite.Player.draw(player.x, player.y, num);
          if (count === 32) { clearInterval(move); this.animation = false; }
        }, 2);
      }
    }else if (input.right) {
      if (player.move(1, 0)) {
        this.animation = true;
        var count = 0;
        var move = setInterval(() => {
          count++;
          this.Sprite.Player.clear(num);
          if (player.animationNumber > 2.9) {
            player.animationNumber = 0;
          }else {
            player.animationNumber += 0.05;
          }
          player.x++;
          this.Sprite.Player.draw(player.x, player.y, num);
          if (count === 32) { clearInterval(move); this.animation = false; }
        }, 2);
      }
    }else if (input.left) {
      if (player.move(-1, 0)) {
        this.animation = true;
        var count = 0;
        var move = setInterval(() => {
          count++;
          this.Sprite.Player.clear(num);
          if (player.animationNumber > 2.9) {
            player.animationNumber = 0;
          }else {
            player.animationNumber += 0.05;
          }
          player.x--;
          this.Sprite.Player.draw(player.x, player.y, num);
          if (count === 32) { clearInterval(move); this.animation = false; }
        }, 2);
      }
    }
  }

  initAll(object) {
    for (let name in object) {
      object[name].forEach((value) => {
        Manager[name][value].init();
      })
    }
  }
}
