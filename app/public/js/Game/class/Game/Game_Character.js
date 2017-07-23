class Game_Character {
  constructor(data, image) {
    var warn = [];

    this.x = 0;
    this.y = 0;
    this.mapX = 0;
    this.mapY = 0;
    this.under = null;
    this.direction = "down";
    this.animationNumber = 1;

    if (data.name) { this.name = data.name; }else { throw new Error("名前が指定されていません"); }
    if (data.hp) { this.hp = data.hp; }else { this.hp = Infinity; }
    if (image) {
      this.image = {};
      this.image["data"] = image;
      this.image["width"] = data.image.width;
      this.image["height"] = data.image.height;
    }else {
      throw new Error("画像ファイルが存在しません");
    }
    if (data.number) { this.number = data.number + 100; }else { this.number = null; warn.push(`${this.name}の番号が指定されていません`); }

    for (let i in warn){
      console.warn(i);
    }
  }

  isDirection() {
    return this.direction;
  }

  move(x, y) {
    let map = Manager.Game.Map.data;
    let position = this.isPosition();
    if (!this.canMove(x, y, map)) { return false; }
    if (this.under) {
      map[position.y][position.x] = this.under;
    }
    this.mapX += x;
    this.mapY += y;
    this.under = map[this.mapY][this.mapX];
    map[this.mapY][this.mapX] = this.number;

    if (x < 0) { this.direction = "left"; }
    if (x > 0) { this.direction = "right"; }
    if (y < 0) { this.direction = "up"; }
    if (y > 0) { this.direction = "down"; }
    return true;
  }

  canMove(x, y, map) {
    if (!map) { throw new Error("マップデータが存在しません"); }

    let position = this.isPosition();
    if (!map[position.y + y]) { return false; }
    if (!map[position.y + y][position.x + x]) { return false; }


    return true;
  }

  isDead() {
    if (this.status.hp > 0) {
      return false;
    }
    return true;
  }
  isPosition() {
    return {
      x: this.mapX,
      y: this.mapY
    };
  }

  movingAnime() {

  }

  isWeapon() {
    return this.weapon;
  }

  setWeapon(weapon) {
    if (weapon) { return false; }
    this.weapon = weapon;
    return true;
  }

  isProtector() {
    return this.protector;
  }

  setProtector(protector) {
    if (protector) { return false; }
    this.protector = protector;
    return true;
  }

  isImage() {
    return this.image;
  }
}
