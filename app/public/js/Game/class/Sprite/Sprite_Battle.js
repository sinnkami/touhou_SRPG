class Sprite_Battle extends Canvas {
  init() {
    super.init();
  }

  draw(x, y) {
    if (!this.ctxMove) { this.init(); }
    return this.drawMoveRange(x * 32, y * 32, 32, 32);
  }

  allClear() {
    if (!this.ctxMove) { this.init(); }
    const x = 0;
    const y = 0;
    const w = Manager.Game.Map.maxX;
    const h = Manager.Game.Map.maxY;
    return this.clearMoveRange(x, y, w, h);
  }
}
