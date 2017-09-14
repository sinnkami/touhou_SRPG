class Game_BattleCursor {
  constructor() {
    this.x = null;
    this.y = null;
    this.mapX = null;
    this.mapY = null;
    this.playerTranslate = {x: null, y: null};
  }

  setInitPosition(x, y) {
    if (!x && !y) { return false; }
    this.x = x;
    this.y = y;
    return true;
  }

  move(x, y, num) {
    const player = Manager.Game.Menbers.get(num);
    if (this.canMove(x, y)) {
      Manager.animation = true;
      setTimeout(() => {
        Manager.Sprite.Map.allClear();
        Manager.Sprite.Player.clear(num);
        Manager.Sprite.Battle.translateCharcter(x*32, y*32);
        Manager.Sprite.Map.allDraw();
        Manager.Sprite.Player.draw(player.x, player.y, num);
        this.mapX += x;
        this.mapY += y;
        this.x += x*32;
        this.y += y*32;
        Manager.animation = false;
      },2*32)
    }
  }

  isPosition() {
    return { x: this.mapX, y: this.mapY };
  }

  canMove(x, y) {
    const map = Manager.Game.Map.data;
    if (!map) { throw new Error("マップデータが存在しません"); }

    let position = this.isPosition();
    if (!map[position.y + y]) { return false; }
    if (!map[position.y + y][position.x + x]) { return false; }

    return true;
  }
}
