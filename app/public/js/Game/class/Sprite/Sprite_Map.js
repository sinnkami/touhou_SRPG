class Sprite_Map extends Canvas{
  init() {
    super.init();
    this.dataName = this.dataName ? this.dataName : null;
  }

  // x, y, チップ番号
  draw(x, y, num) {
    if (!this.ctxMap) { this.init(); }

    let game_map = Manager.Game.Map;
    let maxX = game_map.maxX;
    let maxY = game_map.maxY;
    let chip = game_map.chip;

    let position = this.chipPosition(num);
    return this.drawMap(chip.image, position.x*32, position.y*32, chip.width, chip.height, x*32, y*32, chip.width, chip.height);
  }

  allClear() {
    const x = -32;
    const y = -32;
    const w = this.GameWidth + 32;
    const h = this.GameHeight + 32;
    return this.clearMap(x, y, w, h);
  }

  allDraw(data_name) {
    if (!this.dataName) { throw new Error("マップ名が指定されていません"); }

    Manager.Game.Map.get(this.dataName);

    let map = Manager.Game.Map.data;
    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[y].length; x++){
        this.draw(x, y, map[y][x]);
      }
    }
    return true;
  }

  initAllDraw(data_name) {
    if (this.dataName) {
      var name = this.dataName;
    }else {
      this.dataName = data_name;
      if (!this.dataName) { throw new Error("マップ名が指定されていません"); }
      var name = this.dataName;
    }

    Manager.initAll({
      Sprite: ["Map"],
      Game: ["Map"],
    })
    Manager.Game.Map.get(name);

    let map = Manager.Game.Map.data;
    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[y].length; x++){
        this.draw(x, y, map[y][x]);
      }
    }
    return true;
  }

  chipPosition(num) {
    let y = Math.floor(num / 10);
    let x = num % 10;
    return { x: x, y: y };
  }
}
