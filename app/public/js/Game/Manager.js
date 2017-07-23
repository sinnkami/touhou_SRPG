class Game_Manager {
  constructor(class_data) {
    class_data.forEach((value) => {
      let name = value.constructor.name.split("_");
      this[name[0]] = value;
    })

    this.FPS = 60;
    this.update = false;
    this.GameStart = false;
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
      this.Game.Key.keyup();
      stats.update();
    }, 1000/this.FPS);
  }

  initAll(object) {
    for (let name in object) {
      object[name].forEach((value) => {
        Manager[name][value].init();
      })
    }
  }
}
