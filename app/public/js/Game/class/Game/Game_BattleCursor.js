class Game_BattleCursor {
  constructor() {
    this.x = null;
    this.y = null;
  }

  setInitPosition(x, y) {
    if (!x && !y) { return false; }
    this.x = x;
    this.y = y;
    return true;
  }

  move(x, y) {
    Manager.animation = true;
    setTimeout(() => {
      this.x += x*32;
      this.y += y*32;
      Manager.animation = false;
    },2)
  }
}
