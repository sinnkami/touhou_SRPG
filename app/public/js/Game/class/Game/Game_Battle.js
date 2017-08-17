class Game_Battle {
  init() {
    // 移動範囲を格納する変数作成
    const map = Manager.Game.Map.data;
    this.movementRangeInit = [];
    for (let y = 0; y < map.length; y++) {
      this.movementRangeInit.push([]);
      for (let x = 0; x < map[y].length; x++) {
        this.movementRangeInit[y][x] = false;
      }
    }

    this.movementRange = $.extend(true, this.movementRangeInit);
  }

  initMovementRange() {
    this.movementRange = $.extend(true, this.movementRangeInit);
    return true;
  }

  moveRange(x, y, speed) {
    try {
      this.movementRange[y][x] = true;
      if(speed <= 0) { return; }

      Manager.Sprite.Battle.draw(x, y);

      this.moveRange(x + 1, y, speed - 1);
      this.moveRange(x - 1, y, speed - 1);
      this.moveRange(x, y + 1, speed - 1);
      this.moveRange(x, y - 1, speed - 1);
    } finally {
      return;
    }
  }
}
