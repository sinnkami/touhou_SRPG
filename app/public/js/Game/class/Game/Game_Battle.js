class Game_Battle {
  constructor() {
    this.selectEvent = "start";
    // 戦闘の勝利条件
    this.victoryCondition = "敵を全員倒す";
    // 戦闘の敗北条件
    this.DefeatCondition = "味方の全滅";

    // 戦闘中存在しているキャラクターの配列
    this.character = [];
  }

  init() {
    // 移動範囲を格納する変数作成
    if (!this.rangeInit) {
      const map = Manager.Game.Map.data;
      this.rangeInit = [];
      for (let y = 0; y < map.length; y++) {
        this.rangeInit.push([]);
        for (let x = 0; x < map[y].length; x++) {
          this.rangeInit[y][x] = false;
        }
      }
    }
    this.range = Object.assign({}, this.rangeInit);
    this.rangeDraw = []; // 描画用の値を保存しておく変数

    // 戦闘中移動カーソルクラス
    this.cursor = new Game_BattleCursor();

    // 戦闘中移動する方向・量を保存する変数
    this.moveX = null;
    this.moveY = null;
    this.moveDirection = null;

    // 戦闘中の攻撃者と防御車の番号
    this.attacker = null;
    this.defender = null;

    // 戦闘中動いたか
    this.moved = false;
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

  initRange() {
    this.range = Object.assign({}, this.rangeInit);
    this.rangeDraw = [];
    return true;
  }

  moveRange(x, y, speed) {
    try {
      const map = Manager.Game.Map.data;
      if (map[y][x] === null) { return; }
      if(speed <= 0) { return; }

      this.range[y][x] = true;
      var push = true;
      this.rangeDraw.forEach((position) => {
        if (position.x === x && position.y === y) { push = false; return; }
      })
      if (push) { this.rangeDraw.push({x: x, y: y}); }

      this.moveRange(x + 1, y, speed - 1);
      this.moveRange(x - 1, y, speed - 1);
      this.moveRange(x, y + 1, speed - 1);
      this.moveRange(x, y - 1, speed - 1);
    } finally {
      return;
    }
  }

  attackRange(x, y, range) {
    try {
      const map = Manager.Game.Map.data;
      if (map[y][x] === null) { return; }
      if(range <= 0) { return; }

      this.range[y][x] = true;
      var push = true;
      this.rangeDraw.forEach((position) => {
        if (position.x === x && position.y === y) { push = false; return; }
      })
      if (push) { this.rangeDraw.push({x: x, y: y}); }

      this.attackRange(x + 1, y, range - 1);
      this.attackRange(x - 1, y, range - 1);
      this.attackRange(x, y + 1, range - 1);
      this.attackRange(x, y - 1, range - 1);
    } finally {
      return;
    }
  }

  canMove(x, y) {
    const map = this.range;
    if (map[y][x]) {
      return true;
    }else {
      return false;
    }
  }
}
