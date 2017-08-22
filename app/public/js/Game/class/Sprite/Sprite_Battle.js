class Sprite_Battle extends Canvas {
  init() {
    super.init();
  }

  drawMovementRange(x, y) {
    if (!this.ctxMove) { this.init(); }
    return this.drawMoveRange(x * 32, y * 32, 32, 32);
  }

  allClear() {
    if (!this.ctxMove) { this.init(); }
    this.windowClear();
    return this.moveRangeClear();
  }

  windowClear() {
    const x = 0;
    const y = 0;
    const w = Manager.Game.Map.maxX;
    const h = Manager.Game.Map.maxY;
    return this.clearWindow(x, y, w, h);
  }
  moveRangeClear() {
    const x = 0;
    const y = 0;
    const w = Manager.Game.Map.maxX;
    const h = Manager.Game.Map.maxY;
    return this.clearMoveRange(x, y, w, h);
  }

  drawCursor(x, y) {
    if (!this.ctxMove) { this.init(); }
    return this.drawBattleCursor(x, y, 32, 32);
  }
}
