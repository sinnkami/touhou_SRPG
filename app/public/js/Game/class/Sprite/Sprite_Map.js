class Sprite_Map extends Canvas{
  init() {
    super.init();
  }

  // x, y, チップ番号, データの名前(なくても良い)
  draw(x, y, num) {
    if (!Manager.main) { this.init(); }

    let game_map = Manager.Game.Map;
    let maxX = game_map.maxX;
    let maxY = game_map.maxY;
    let chip = game_map.chip;

    let position = this.chipPosition(num);
    Manager.main_context.drawImage(chip.image, position.x*32, position.y*32, chip.width, chip.height, x*32, y*32, chip.width, chip.height);
    return true;
  }

  chipPosition(num) {
    let y = num / 10;
    let x = num % 10;
    return { x: x, y: y };
  }
}
