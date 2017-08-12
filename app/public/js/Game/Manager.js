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
    this.battleInterval = null;
  }

  start() {
    this.update = true;
    this.GameStart = true;
    this.Game.Menbers.set("ReimuHakurei");

    // テスト
    let player = Manager.Game.Menbers.get(0);
    player.x = 32;
    player.y = 32;
    player.mapX = 1;
    player.mapY = 1;
    // テスト終了
    this.mainInterval = this.mainLoop();
  }

  mainLoop() {
    console.log("mainLoop開始");
    this.Game.Key.keydown();
    this.Game.Key.keyup();
    return setInterval(() => {
      let result = document.hasFocus();
      if (!result) { return; }

      this.FrameCount++;
      if (!this.view) {
        this.view = this.Sprite.Map.initAllDraw("big");
      }
      this.test();

      if (!this.animation){ this.Scene.Move.event(); }

      if (this.battleInterval) { clearInterval(this.mainInterval); this.mainInterval = null; }
      stats.update();
    }, 1000/this.FPS);
  }

  battleLoop() {
    console.log("battleLoop開始");
    return setInterval(() => {
      let result = document.hasFocus();
      if (!result) { return; }

      this.FrameCount++;
      this.Game.Key.keydown();

      this.Scene.Battle.move(0);
      this.test();

      this.Game.Key.keyup();
      if (this.mainInterval) { clearInterval(this.battleInterval); this.battleInterval = null; }
    })
  }

  test() {
    const input = this.Game.Key.input;
    if (input.shift) {
      input.shift = false;
      if (this.mainInterval) { this.battleInterval = this.battleLoop(); }
      else if (this.battleInterval) { this.mainInterval = this.mainLoop(); }
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
