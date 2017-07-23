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
      player.move(0, -1, num);
    }else if (input.down) {
      player.move(0, 1, num);
    }else if (input.right) {
      player.move(1, 0, num);
    }else if (input.left) {
      player.move(-1, 0, num);
    }else {
      player.animationNumber = 1;
      this.Sprite.Player.clear(num);
      this.Sprite.Player.draw(player.x, player.y, num);
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
