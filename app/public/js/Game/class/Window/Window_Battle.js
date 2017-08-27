class Window_Battle extends Canvas {
  init() {
    super.init();
    this.cursor = {
      x: 0,
      y: 0,
      draw: function(w, h) {
        this.drawWindowCursor(this.cursor.x, this.cursor.y, w, h);
      },
      move: function (x, y) {
        this.cursor.x += x;
        this.cursor.y += y;
      }
    }
  }

  draw() {
    const image = Manager.Data.Window.battleWindow();
    this.drawWindowBattle(image, 500, 50, 150, 400);
  }

  allClear() {
    const x = 0;
    const y = 0;
    const w = Manager.GameWidth;
    const h = Manager.GameHeight;
    return this.clearWindow(x, y, w, h);
  }
}
