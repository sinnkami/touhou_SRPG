class Scene_Battle {
  move(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const input = Manager.Game.Key.input;
    if (!gameBattle.selectEvent) { gameBattle.selectEvent = "start"; }

    switch (gameBattle.selectEvent) {
      case "start":
        gameBattle.init();
        gameBattle.selectEvent = "selectMove";
      break;

      case "selectMove":
        gameBattle.initMovementRange();
        spriteBattle.allClear();

        gameBattle.moveRange(player.mapX, player.mapY, 8);
        spriteBattle.drawCursor(player.x, player.y);
        gameBattle.selectEvent = "moveNow";
      break;

      case "moveNow":
        spriteBattle.moveRangeClear();
        gameBattle.movementRangeDraw.forEach((position) => {
          spriteBattle.drawMovementRange(position.x, position.y);
        });
        spriteBattle.rainbow += 2;
        if (spriteBattle.rainbow > 360) { spriteBattle.drawMoveRangeCount = 0; }
      break;
      default: throw new Error("バトルイベントが存在していません");
    }
  }
}
