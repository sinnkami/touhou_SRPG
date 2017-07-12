class Game_Manager {
  constructor(class_data) {
    class_data.forEach((value, num) => {
      let name = value.constructor.name.split("_");
      this[name[0]] = value;
    })

    this.FPS = 60;
    this.update = false;
    this.GameStart = false;
    this.FrameCount = 0;

    this.mainInterval = null;
  }

  start() {
    this.update = true;
    this.GameStart = true;
    this.mainInterval = this.main_loop();
  }

  main_loop() {
    const Stats = require('stats.js');
    var stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );

    return setInterval(() => {
      this.FrameCount++;
      if (this.view) {
        this.initAll({
          Sprite: ["Map"],
          Game: ["Map"],
        })
        Manager.Game.Map.get("test");
        let map = Manager.Game.Map.data;
        let sprite = Manager.Sprite.Map;
        for (let y = 0; y < map.length; y++){
          for (let x = 0; x < map[y].length; x++){
            sprite.draw(x, y, map[y][x]);
          }
        }
        this.view = false;
      }
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
