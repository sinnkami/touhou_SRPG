class Sprite_Map extends Canvas{
  init() {
    super.init();
    this.dataName = this.dataName ? this.dataName : null;
  }

  // x, y, チップ番号
  draw(x, y, num) {
    if (!this.ctxMap) { this.init(); }

    const game_map = Manager.Game.Map;
    const chip = game_map.chip;

    let position = this.chipPosition(num);
    return this.drawMap(chip.image, position.x*32, position.y*32, chip.width, chip.height, x*32, y*32, chip.width, chip.height);
  }

  allClear() {
    const x = 0;
    const y = 0;
    const w = Manager.Game.Map.maxX;
    const h = Manager.Game.Map.maxY;
    return this.clearMap(x, y, w, h);
  }

  allDraw(data_name) {
    if (!this.dataName) { throw new Error("マップ名が指定されていません"); }

    Manager.Game.Map.get(this.dataName);

    const map = Manager.Game.Map.data;
    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[y].length; x++){
        this.draw(x, y, map[y][x]);
      }
    }
    return true;
  }

  initAllDraw(data_name) {
    if (!this.dataName) {
      this.dataName = data_name;
      if (!this.dataName) { throw new Error("マップ名が指定されていません"); }
    }

    const name = this.dataName;

    Manager.initAll({
      Sprite: ["Map"],
      Game: ["Map"],
    })
    Manager.Game.Map.get(name);

    const map = Manager.Game.Map.data;
    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[y].length; x++){
        this.draw(x, y, map[y][x]);
      }
    }
    return true;
  }

  chipPosition(num) {
    const number = Manager.Game.Map.number;
    num = num - number;
    const y = Math.floor(num / 10);
    const x = num % 10;
    return { x: x, y: y };
  }
}
