class Game_Character {
  display() {
    
  }

  toDirection() {
    return this.direction;
  }

  move(x, y) {
    if (this.canMove(x, y)) { return false; }
  }

  canMove(x, y) {

  }

  isDead() {
    if (this.status.hp > 0) {
      return false;
    }
    return true;
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
