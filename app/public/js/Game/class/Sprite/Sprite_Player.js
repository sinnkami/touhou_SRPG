class Sprite_Player extends Canvas {
  constructor() {
    super();
    this.translateCount = { x: 0, y: 0 };
    this.translateSwich = false;
  }

  draw(x, y, num) {
    if (!this.ctxPlayer) { this.init(); }

    let game_player = Manager.Game.Menbers.get(num);
    let image = game_player.image;

    let position = this.playerDirection(game_player);
    return this.drawCharacter(image.data, position.x*image.width, position.y*image.height, image.width, image.height, x, y, image.width, image.height);
  }

  translate(x, y, num) {
    this.translateCount = 0;
    this.translateCharcter(x, y);

    return true;

    // NOTE: 現在はキャラクターを確定で中心に置くのでコメントアウト
    // if (!this.ctxPlayer) { this.init(); }
    // this.canTranslate(x, y, num);
    // if (x && this.translateCount.x > 0) {
    //   this.translateCharcter(x, y);
    //   return "x";
    // }else if (y && this.translateCount.y > 0) {
    //   this.translateCharcter(x, y);
    //   return "y";
    // }else {
    //   return false;
    // }
  }

  canTranslate(x, y, num) {
    if (this.translateSwich) { return false; }
    this.translateSwich = true;

    const puls = {x: this.translateCount.x + Math.abs(x), y: this.translateCount.y + Math.abs(y)};

    const game_player = Manager.Game.Menbers.get(num);
    const mapX = game_player.mapX;
    const mapY = game_player.mapY;
    const center = Manager.Game.Map.center;
    const map = Manager.Game.Map.data;

    if (x && (mapX - center.x.start === 0 || mapX + center.x.len === map[0].length)) { puls.x = 2; }
    else if (x && (mapX - center.x.start < 0 || mapX + center.x.len > map[0].length)) { return false; }
    if (y && (mapY - center.y.start === 0 || mapY + center.y.len === map.length)) { puls.y = 2; }
    else if (y && (mapY - center.y.start < 0 || mapY + center.y.len > map.length)) { return false; }

    this.translateCount = puls;
  }

  clear(num) {
    if (!this.ctxPlayer) { this.init(); }

    let game_player = Manager.Game.Menbers.get(num);
    let x = game_player.x;
    let y = game_player.y;
    let width = game_player.image.width;
    let height = game_player.image.height;

    return this.clearCharacter(x, y, width, height);
  }

  playerDirection(player) {
    let direction = player.isDirection();
    let animation = player.animationNumber;

    switch (direction) {
      case "up":
        return { x: Math.floor(animation), y: 3 };
      break;
      case "down":
        return { x: Math.floor(animation), y: 0 };
      break;
      case "right":
        return { x: Math.floor(animation), y: 2 };
      break;
      case "left":
        return { x: Math.floor(animation), y: 1 };
      break;
    }
  }
}
