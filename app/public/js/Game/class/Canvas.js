class Canvas {
  init() {
    if (Manager.ctxMap) { this.ctxMap = Manager.ctxMap; }else { this.ctxMap = null; }
    if (Manager.ctxWindow) { this.ctxWindow = Manager.ctxWindow; }else { this.ctxWindow = null; }
    if (Manager.ctxAnime) { this.ctxAnime = Manager.ctxAnime; }else { this.ctxAnime = null; }
    if (Manager.ctxPlayer) { this.ctxPlayer = Manager.ctxPlayer; }else { this.ctxPlayer = null; }
    if (Manager.ctxMove) { this.ctxMove = Manager.ctxMove; }else { this.ctxMove = null; }
    if (Manager.GameWidth) { this.width = Manager.GameWidth; }else { this.width = null; }
    if (Manager.GameHeight) { this.height = Manager.GameHeight; }else { this.height = null; }

    this.rainbow = 0; // 色指定HSLの色相

    this.font = "10px 'umefont'";
    this.color = "#000000";

    this.drawMoveRangeCount = 0;
  }

  drawMap(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    return this.ctxMap.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  drawCharacter(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    return this.ctxPlayer.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  drawAnimationFrame(image, dx, dy, dw, dh) {
    return this.ctxAnime.drawImage(image, dx, dy, dw, dh);
  }

  drawAnimationText(text, x, y, font = this.font, color = this.color) {
    this.ctxAnime.font = font;
    this.ctxAnime.fillStyle = color;
    return this.ctxAnime.fillText(text, x, y);
  }

  drawWindowText(text, x, y, font = this.font, color = this.color) {
    this.ctxWindow.font = font;
    this.ctxWindow.fillStyle = color;
    return this.ctxWindow.fillText(text, x, y);
  }

  drawWindowBattle(image, dx, dy, dw, dh) {
    return this.ctxWindow.drawImage(image, dx, dy, dw, dh);
  }

  drawMoveRange(x, y, w, h) {
    this.ctxMove.fillStyle = `hsla(${this.rainbow}, 100%, 50%, 0.30)`;
    return this.ctxMove.fillRect(x, y, w, h);
  }

  clearCharacter(x, y, w, h) {
    return this.ctxPlayer.clearRect(x, y, w, h);
  }
  clearWindow(x, y, w, h) {
    return this.ctxWindow.clearRect(x, y, w, h);
  }

  clearAnimation(x, y, w, h) {
    return this.ctxAnime.clearRect(x, y, w, h);
  }

  clearMap(x, y, w, h) {
    return this.ctxMap.clearRect(x, y, w, h);
  }

  clearMoveRange(x, y, w, h) {
    return this.ctxMove.clearRect(x, y, w, h);
  }

  drawBattleCursor(x, y, w, h) {
    this.ctxMove.strokeStyle = "#000000";
    return this.ctxMove.strokeRect(x, y, w, h);
  }

  drawWindowCursor(x, y, w, h) {
    this.ctxWindow.strokeStyle = "#000000";
    return this.ctxWindow.strokeRect(x, y, w, h);
  }

  translateCharcter(x, y) {
    this.ctxPlayer.translate(-x, -y);
    this.ctxMove.translate(-x, -y);
    this.ctxMap.translate(-x, -y);
    return true;
  }

  initTranslateCharcter() {
    this.ctxPlayer.setTransform(1,0,0,1,0,0);
    this.ctxMove.setTransform(1,0,0,1,0,0);
    this.ctxMap.setTransform(1,0,0,1,0,0);
    return true;
  }
}
