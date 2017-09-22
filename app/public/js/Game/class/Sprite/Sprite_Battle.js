class Sprite_Battle extends Canvas {
  init() {
    super.init();
  }

  drawRange(x, y) {
    if (!this.ctxMove) { this.init(); }
    return this.drawMoveRange(x * 32, y * 32, 32, 32);
  }

  allClear() {
    if (!this.ctxMove) { this.init(); }
    this.windowClear();
    return this.rangeClear();
  }

  drawVictoryCondition(text, x, frame) {
    if (!this.ctxAnime) { this.init(); }

    const y = 100;
    this.drawAnimationFrame(frame, x, y, 400, 80);
    this.drawAnimationText("勝利条件", x+70, y+30, "20px 'umefont'");
    this.drawAnimationText(text, x+120, y+60, "20px 'umefont'");
  }

  drawDefeatCondition(text, x, frame) {
    if (!this.ctxAnime) { this.init(); }

    const y = 200;
    this.drawAnimationFrame(frame, x, y, 400, 80);
    this.drawAnimationText("敗北条件", x+70, y+30, "20px 'umefont'");
    this.drawAnimationText(text, x+120, y+60, "20px 'umefont'");
  }

  animationClear() {
    if (!this.ctxAnime) { this.init(); }
    const x = 0;
    const y = 0;
    const w = Manager.GameWidth;
    const h = Manager.GameHeight;
    return this.clearAnimation(x, y, w, h);
  }

  windowClear() {
    const x = 0;
    const y = 0;
    const w = Manager.Game.Map.maxX;
    const h = Manager.Game.Map.maxY;
    return this.clearWindow(x, y, w, h);
  }
  rangeClear() {
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
