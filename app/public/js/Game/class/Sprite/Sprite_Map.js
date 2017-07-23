class Sprite_Map extends Canvas{
  init() {
    super.init();
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

  allDraw(data_name) {
    Manager.initAll({
      Sprite: ["Map"],
      Game: ["Map"],
    })
    Manager.Game.Map.get(data_name);

    let map = Manager.Game.Map.data;
    for (let y = 0; y < map.length; y++){
      for (let x = 0; x < map[y].length; x++){
        this.draw(x, y, map[y][x]);
      }
    }
    return true;
  }

  chipPosition(num) {
    let y = num / 10;
    let x = num % 10;
    return { x: x, y: y };
  }
}
