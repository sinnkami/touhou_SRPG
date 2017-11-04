class Window_Battle extends Canvas {
  init() {
    super.init();
    this.cursor = {
      x: 505,
      y: 70,
      number: 0,
      max: 6, // 最大サイズ
      move: function (x, y) {
        this.x += x * 20;
        this.y += y * 30;
      }
    }
  }

  draw() {
    const image = Manager.Data.Window.battleWindow();
    const gameBattle = Manager.Game.Battle;

    this.drawWindowBattle(image, 500, 50, 150, 400);
    if (!gameBattle.moved) {
      this.drawWindowText("移動", 530, 90, "20px 'umefont'");
    }else {
      this.drawWindowText("移動", 530, 90, "20px 'umefont'", "#9c9c9c");
    }
    this.drawWindowText("攻撃", 530, 120, "20px 'umefont'");
    this.drawWindowText("テスト", 530, 150, "20px 'umefont'");
    this.drawWindowText("テスト", 530, 180, "20px 'umefont'");
    this.drawWindowText("テスト", 530, 210, "20px 'umefont'");
    this.drawWindowText("テスト", 530, 240, "20px 'umefont'");
    this.drawWindowText("テスト", 530, 270, "20px 'umefont'");
    this.drawWindowCursor(this.cursor.x, this.cursor.y, 100, 30);
  }

  allClear() {
    const x = 0;
    const y = 0;
    const w = Manager.GameWidth;
    const h = Manager.GameHeight;
    return this.clearWindow(x, y, w, h);
  }
}
