class Scene_Battle {
  event(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const windowBattle = Manager.Window.Battle;
    const input = Manager.Game.Key.input;
    if (!gameBattle.selectEvent) { gameBattle.selectEvent = "start"; }

    switch (gameBattle.selectEvent) {
      case "start":
        gameBattle.init();
        gameBattle.selectEvent = "battleConditions";
      break;

      case "battleConditions":
        Manager.Game.Battle.battleConditionsStart();
      break;

      case "whoseTrun":
        gameBattle.selectEvent = "trunStart";
      break;

      case "trunStart":
        spriteBattle.initTranslateCharcter();
        // spriteBattle.translateCharcter(player.x+Manager.GameWidth/2, player.y+Manager.GameHeight/2);
        windowBattle.init();
        gameBattle.selectEvent = "isSelect";
      break;

      case "isSelect":
        windowBattle.allClear();
        windowBattle.draw();
        //gameBattle.selectEvent = "selectMove";
      break;

      case "selectMove":
        gameBattle.initMovementRange();
        spriteBattle.allClear();

        gameBattle.moveRange(player.mapX, player.mapY, 8);
        gameBattle.cursor.setInitPosition(player.x, player.y);
        gameBattle.selectEvent = "moveNow";
      break;

      case "moveNow":
        spriteBattle.moveRangeClear();
        gameBattle.movementRangeDraw.forEach((position) => {
          spriteBattle.drawMovementRange(position.x, position.y);
        });
        spriteBattle.drawCursor(gameBattle.cursor.x, gameBattle.cursor.y);

        if (input.up) { gameBattle.cursor.move(0, -1); }
        else if (input.down) { gameBattle.cursor.move(0, 1); }
        else if (input.right) { gameBattle.cursor.move(1, 0); }
        else if (input.left) { gameBattle.cursor.move(-1, 0); }

        spriteBattle.rainbow += 2;
        if (spriteBattle.rainbow > 360) { spriteBattle.drawMoveRangeCount = 0; }
      break;
      default: throw new Error("バトルイベントが存在していません");
    }
  }
}
