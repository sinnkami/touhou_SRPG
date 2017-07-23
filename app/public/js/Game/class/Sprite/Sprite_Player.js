class Sprite_Player extends Canvas {
  init() {
    super.init();
  }

  draw(x, y, num) {
    if (!this.ctxPlayer) { this.init(); }

    let game_player = Manager.Game.Menbers.get(num);
    console.log(game_player);
    let maxX = game_player.maxX;
    let maxY = game_player.maxY;
    let image = game_player.image;

    let position = this.playerPosition(game_player);
    return this.drawCharacter(image.data, position.x*image.width, position.y*image.height, image.width, image.height, x*32, y*32, image.width, image.height);
  }

  playerPosition(player) {
    let direction = player.direction;
    let animation = player.animationNumber;

    switch (direction) {
      case "up":
        return { x: animation, y: 3 };
      break;
      case "down":
        return { x: animation, y: 0 };
      break;
      case "right":
        return { x: animation, y: 2 };
      break;
      case "left":
        return { x: animation, y: 1 };
      break;
    }
  }
}
