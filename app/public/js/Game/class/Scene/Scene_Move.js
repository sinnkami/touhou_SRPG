class Scene_Move {
  event() {
    const num = 0; //キャラ番号
    const input = Manager.Game.Key.input;
    const player = Manager.Game.Menbers.get(num);
    const sprite = Manager.Sprite.Player;

    if (input.up) {
      player.move(0, -1, num);
    }else if (input.down) {
      player.move(0, 1, num);
    }else if (input.right) {
      player.move(1, 0, num);
    }else if (input.left) {
      player.move(-1, 0, num);
    }else {
      player.animationNumber = 1;
      sprite.clear(num);
      sprite.draw(player.x, player.y, num);
      return true;
    }
  }
}
