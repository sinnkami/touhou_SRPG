class Game_Battle {
  init() {
    this.selectEvent = "start";

    // 移動範囲を格納する変数作成
    const map = Manager.Game.Map.data;
    this.movementRangeInit = [];
    for (let y = 0; y < map.length; y++) {
      this.movementRangeInit.push([]);
      for (let x = 0; x < map[y].length; x++) {
        this.movementRangeInit[y][x] = false;
      }
    }
    this.movementRange = jQuery.extend(true, this.movementRangeInit);
    this.movementRangeDraw = []; // 描画用の値を保存しておく変数
    // 戦闘中移動カーソル変数
    this.cursor = {
      x: null,
      y: null,
    }
  }

  initMovementRange() {
    this.movementRange = jQuery.extend(true, this.movementRangeInit);
    return true;
  }

  moveRange(x, y, speed) {
    try {
      this.movementRange[y][x] = true;
      var push = true;
      this.movementRangeDraw.forEach((position) => {
        if (position.x === x && position.y === y) { push = false; return; }
      })
      if (push) { this.movementRangeDraw.push({x: x, y: y}); }
      if(speed <= 0) { return; }

      this.moveRange(x + 1, y, speed - 1);
      this.moveRange(x - 1, y, speed - 1);
      this.moveRange(x, y + 1, speed - 1);
      this.moveRange(x, y - 1, speed - 1);
    } finally {
      return;
    }
  }
}
