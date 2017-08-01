class Sprite_Battle extends Canvas {
  init() {
    super.init();
  }

  draw(x, y) {
    if (!this.ctxMap) { this.init(); }
    return this.drawMoveRange(x * 32, y * 32, 32, 32);
  }
}
