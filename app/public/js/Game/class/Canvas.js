class Canvas {
  init() {
    if (Manager.ctxMap) { this.ctxMap = Manager.ctxMap; }else { this.ctxMap = null; }
    if (Manager.ctxWindow) { this.ctxWindow = Manager.ctxWindow; }else { this.ctxWindow = null; }
    if (Manager.ctxAnime) { this.ctxAnime = Manager.ctxAnime; }else { this.ctxAnime = null; }
    if (Manager.ctxPlayer) { this.ctxPlayer = Manager.ctxPlayer; }else { this.ctxPlayer = null; }
    if (Manager.GameWidth) { this.width = Manager.GameWidth; }else { this.width = null; }
    if (Manager.GameHeight) { this.height = Manager.GameHeight; }else { this.height = null; }
  }

  drawMap(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    return this.ctxMap.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  drawCharacter(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    return this.ctxPlayer.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  clearCharacter(x, y, w, h) {
    return this.ctxPlayer.clearRect(x, y, w, h);
  }
}
