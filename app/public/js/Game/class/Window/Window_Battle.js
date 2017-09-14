class Window_Battle extends Canvas {
  init() {
    super.init();
    this.cursor = {
      x: 505,
      y: 70,
      move: function (x, y) {
        this.x += x * 20;
        this.y += y * 20;
      }
    }
  }

  draw() {
    const image = Manager.Data.Window.battleWindow();
    this.drawWindowBattle(image, 500, 50, 150, 400);
    this.drawWindowText("移動", 530, 90, "20px 'umefont'");
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
