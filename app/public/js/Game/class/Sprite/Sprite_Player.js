class Sprite_Player extends Canvas {
  init() {
    super.init();
  }

  draw(x, y, num) {
    if (!this.ctxPlayer) { this.init(); }

    let game_player = Manager.Game.Menbers.get(num);
    let maxX = game_player.maxX;
    let maxY = game_player.maxY;
    let image = game_player.image;

    let position = this.playerPosition(game_player);
    return this.drawCharacter(image.data, position.x*image.width, position.y*image.height, image.width, image.height, x, y, image.width, image.height);
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

  playerPosition(player) {
    let direction = player.direction;
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
