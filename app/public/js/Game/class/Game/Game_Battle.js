class Game_Battle {
  init() {
    this.selectEvent = "start";

    // 戦闘の勝利条件
    this.victoryCondition = "敵を全員倒す";
    // 戦闘の敗北条件
    this.DefeatCondition = "味方の全滅";

    // 移動範囲を格納する変数作成
    const map = Manager.Game.Map.data;
    this.movementRangeInit = [];
    for (let y = 0; y < map.length; y++) {
      this.movementRangeInit.push([]);
      for (let x = 0; x < map[y].length; x++) {
        this.movementRangeInit[y][x] = false;
      }
    }
    this.movementRange = Object.assign({}, this.movementRangeInit);
    this.movementRangeDraw = []; // 描画用の値を保存しておく変数

    // 戦闘中移動カーソルクラス
    this.cursor = new Game_BattleCursor();

    // 戦闘中移動する方向・量を保存する変数
    this.moveX = null;
    this.moveY = null;
    this.moveDirection = null;
  }

  battleConditionsStart() {
    Manager.animation = true;
    let canvas = document.getElementById('anime');
    canvas.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    var count = 0;
    const redFrame = Manager.Data.Window.redWindow();
    const blueFrame = Manager.Data.Window.blueWindow();
    const anime = setInterval(() => {
      count++;
      Manager.Sprite.Battle.animationClear();
      Manager.Sprite.Battle.drawVictoryCondition(this.victoryCondition, 0+count*1, redFrame);
      Manager.Sprite.Battle.drawDefeatCondition(this.DefeatCondition, Manager.GameWidth-count*11, blueFrame);
      if (count === 40) {clearInterval(anime); count = null; this.battleConditionsIsInput(); }
    })
  }

  battleConditionsIsInput() {
    const input = Manager.Game.Key.input;
    var anime = setInterval(() => {
      if (input.enter) { clearInterval(anime); anime = null; this.battleConditionsEnd();}
      setTimeout(() => {
        if (anime === null) { return; }
        clearInterval(anime);
        anime = null;
        this.battleConditionsEnd();
      }, 8000)
    })
  }

  battleConditionsEnd() {
    Manager.animation = true;
    const canvas = document.getElementById('anime');
    canvas.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    var count = 40;
    const redFrame = Manager.Data.Window.redWindow();
    const blueFrame = Manager.Data.Window.blueWindow();
    const anime = setInterval(() => {
      count++;
      Manager.Sprite.Battle.animationClear();
      Manager.Sprite.Battle.drawVictoryCondition(this.victoryCondition, 0+count*7, redFrame);
      Manager.Sprite.Battle.drawDefeatCondition(this.DefeatCondition, Manager.GameWidth-40*11-count*7, blueFrame);
      if (count === 100) {
        clearInterval(anime);
        count = null;
        Manager.animation = false;
        canvas.style.backgroundColor = "rgba(0, 0, 0, 0)";
        Manager.Game.Battle.selectEvent = "whoseTrun";
      }
    })
  }

  initMovementRange() {
    this.movementRange = Object.assign({}, this.movementRangeInit);
    this.movementRangeDraw = [];
    return true;
  }

  moveRange(x, y, speed) {
    try {
      const map = Manager.Game.Map.data;
      if (map[y][x] === null) { return; }
      if(speed <= 0) { return; }

      this.movementRange[y][x] = true;
      var push = true;
      this.movementRangeDraw.forEach((position) => {
        if (position.x === x && position.y === y) { push = false; return; }
      })
      if (push) { this.movementRangeDraw.push({x: x, y: y}); }

      this.moveRange(x + 1, y, speed - 1);
      this.moveRange(x - 1, y, speed - 1);
      this.moveRange(x, y + 1, speed - 1);
      this.moveRange(x, y - 1, speed - 1);
    } finally {
      return;
    }
  }

  canMove(x, y) {
    const map = this.movementRange;
    if (map[y][x]) {
      return true;
    }else {
      return false;
    }
  }
}
