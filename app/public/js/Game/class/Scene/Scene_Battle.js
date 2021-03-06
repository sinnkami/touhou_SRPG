class Scene_Battle {
  constructor() {
    this.anActorNumber = null;
  }

  event() {
    if (!Manager.Game.Battle.selectEvent) { Manager.Game.Battle.selectEvent = "start"; }
    if (this.anActorNumber !== null) { var number = this.anActorNumber; }
    switch (Manager.Game.Battle.selectEvent) {
      case "start":
        this.start();
      break;
      case "battleConditions":
        this.battleConditions();
      break;
      case "whoseTrun":
        this.whoseTrun();
      break;
      case "trunStart":
        this.trunStart(number);
      break;
      case "isSelect":
        this.isSelect();
      break;
      case "selectedAttack":
        this.selectedAttack(number);
      break;
      case "selectedMove":
        this.selectedMove(number);
      break;
      case "whereToAttack":
        this.whereToAttack(number);
      break;
      case "whereToMove":
        this.whereToMove(number);
      break;
      case "toMoveing":
        this.toMoveing(number);
      break;


      case "trunEnd":
        this.trunEnd();
      break;

      default: throw new Error("バトルイベントが存在していません");
    }
  }

  start() {
    const gameBattle = Manager.Game.Battle;
    gameBattle.init();
    gameBattle.selectEvent = "battleConditions";

    //TODO: 戦闘に出るキャラを追加する
    gameBattle.character.push({
      number: 0,
      point: 0,
      move: function (self) {
        const player = Manager.Game.Menbers.get(this.number);
        this.point += player.speed;
        if (this.point >= 100) {
          this.point = 0;
          self.anActorNumber = this.number;
        }
      }
    })
  }

  battleConditions() {
    const gameBattle = Manager.Game.Battle;
    gameBattle.battleConditionsStart();
  }

  whoseTrun() {
    const gameBattle = Manager.Game.Battle;
    for (let i = 0; i < gameBattle.character.length; i++) {
      gameBattle.character[i].move(this);
      console.log(gameBattle.character[i].number, gameBattle.character[i].point);
    }
    if (this.anActorNumber !== null) {
      gameBattle.selectEvent = "trunStart";
    }
  }

  trunStart(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const windowBattle = Manager.Window.Battle;

    Manager.Sprite.Map.allClear();
    Manager.Sprite.Player.clear(number);
    spriteBattle.initTranslateCharcter();
    spriteBattle.translateCharcter(player.mapX*32-32*10, player.mapY*32-32*7);
    gameBattle.cursor.mapX = player.mapX;
    gameBattle.cursor.mapY = player.mapY;
    Manager.Sprite.Map.allDraw();
    Manager.Sprite.Player.draw(player.x, player.y, number);
    windowBattle.init();
    gameBattle.selectEvent = "isSelect";
  }

  isSelect() {
    const windowBattle = Manager.Window.Battle;
    const input = Manager.Game.Key.input;
    const gameBattle = Manager.Game.Battle;
    windowBattle.allClear();
    windowBattle.draw();
    if (input.enter) {
      input.enter = false;
      switch (windowBattle.cursor.number) {
        case 0:
          if (gameBattle.moved) { break; }
          gameBattle.selectEvent = "selectedMove";
        break;
        case 1:
          gameBattle.selectEvent = "selectedAttack";
        break;
        default: throw new Error("カーソルの番号が存在しません")
      }
    }else if (input.up && windowBattle.cursor.number !== 0) {
      input.up = false;
      windowBattle.cursor.number--;
      windowBattle.cursor.move(0, -1);
    }else if (input.down && windowBattle.cursor.number !== windowBattle.cursor.max) {
      input.down = false;
      windowBattle.cursor.number++;
      windowBattle.cursor.move(0, 1);
    }
  }

  selectedAttack(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;

    gameBattle.initRange();
    spriteBattle.allClear();

    gameBattle.cursor.playerTranslate = {x: player.mapX*32-32*10, y: player.mapY*32-32*7};

    const range = 6;
    const space = 4;
    gameBattle.attackRange(player.mapX, player.mapY, range);
    for (let i = 0; i < gameBattle.rangeDraw.length; i++) {
      if (Math.abs(gameBattle.rangeDraw[i].x - player.mapX) + Math.abs(gameBattle.rangeDraw[i].y - player.mapY) <= space) {
        gameBattle.rangeDraw.splice(i, 1);
        i--;
      }
    }
    gameBattle.cursor.setInitPosition(player.x, player.y);
    gameBattle.selectEvent = "whereToAttack";
  }

  selectedMove(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;

    gameBattle.initRange();
    spriteBattle.allClear();

    gameBattle.cursor.playerTranslate = {x: player.mapX*32-32*10, y: player.mapY*32-32*7};

    gameBattle.moveRange(player.mapX, player.mapY, 8);
    gameBattle.cursor.setInitPosition(player.x, player.y);
    gameBattle.selectEvent = "whereToMove";
  }

  whereToAttack(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const input = Manager.Game.Key.input;

    spriteBattle.rangeClear();
    gameBattle.rangeDraw.forEach((position) => {
      spriteBattle.drawRange(position.x, position.y);
    });
    spriteBattle.drawCursor(gameBattle.cursor.x, gameBattle.cursor.y);

    if (input.up) { gameBattle.cursor.move(0, -1, number); }
    else if (input.down) { gameBattle.cursor.move(0, 1, number); }
    else if (input.right) { gameBattle.cursor.move(1, 0, number); }
    else if (input.left) { gameBattle.cursor.move(-1, 0, number); }
    else if (input.back) {
      spriteBattle.rangeClear();
      gameBattle.selectEvent = "isSelect";
      Manager.Sprite.Map.allClear();
      Manager.Sprite.Player.clear(number);
      spriteBattle.initTranslateCharcter();
      spriteBattle.translateCharcter(gameBattle.cursor.playerTranslate.x, gameBattle.cursor.playerTranslate.y);
      Manager.Sprite.Map.allDraw();
      Manager.Sprite.Player.draw(player.x, player.y, number);
      gameBattle.cursor.mapX = player.mapX;
      gameBattle.cursor.mapY = player.mapY;
    }

    spriteBattle.rainbow += 2;
    if (spriteBattle.rainbow > 360) { spriteBattle.drawMoveRangeCount = 0; }
  }

  whereToMove(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const input = Manager.Game.Key.input;

    spriteBattle.rangeClear();
    gameBattle.rangeDraw.forEach((position) => {
      spriteBattle.drawRange(position.x, position.y);
    });
    spriteBattle.drawCursor(gameBattle.cursor.x, gameBattle.cursor.y);

    if (input.up) { gameBattle.cursor.move(0, -1, number); }
    else if (input.down) { gameBattle.cursor.move(0, 1, number); }
    else if (input.right) { gameBattle.cursor.move(1, 0, number); }
    else if (input.left) { gameBattle.cursor.move(-1, 0, number); }
    else if (input.back) {
      spriteBattle.rangeClear();
      gameBattle.selectEvent = "isSelect";
      Manager.Sprite.Map.allClear();
      Manager.Sprite.Player.clear(number);
      spriteBattle.initTranslateCharcter();
      spriteBattle.translateCharcter(gameBattle.cursor.playerTranslate.x, gameBattle.cursor.playerTranslate.y);
      Manager.Sprite.Map.allDraw();
      Manager.Sprite.Player.draw(player.x, player.y, number);
      gameBattle.cursor.mapX = player.mapX;
      gameBattle.cursor.mapY = player.mapY;
    }
    else if (input.enter) {
      if (gameBattle.canMove(gameBattle.cursor.mapX, gameBattle.cursor.mapY) && !(gameBattle.cursor.mapX === player.mapX && gameBattle.cursor.mapY === player.mapY)) {
        gameBattle.selectEvent = "toMoveing";
        gameBattle.moved = true;
        gameBattle.moveX = gameBattle.cursor.mapX - player.mapX;
        gameBattle.moveY = gameBattle.cursor.mapY - player.mapY;
        gameBattle.moveDirection = Math.abs(gameBattle.moveX) > Math.abs(gameBattle.mapY) ? "horizontal" : "vertical"
      }
    }

    spriteBattle.rainbow += 2;
    if (spriteBattle.rainbow > 360) { spriteBattle.drawMoveRangeCount = 0; }
  }

  toMoveing(number) {
    const player = Manager.Game.Menbers.get(number);
    const gameBattle = Manager.Game.Battle;
    const spriteBattle = Manager.Sprite.Battle;
    const input = Manager.Game.Key.input;

    spriteBattle.rangeClear();
    spriteBattle.drawRange(gameBattle.cursor.mapX, gameBattle.cursor.mapY);
    spriteBattle.drawCursor(gameBattle.cursor.x, gameBattle.cursor.y);

    switch (gameBattle.moveDirection) {
      case "horizontal":
        if (Math.abs(gameBattle.moveX) !== 0) {
          if (gameBattle.moveX < 0) {
            player.battleMove(-1, 0, number);
            gameBattle.moveX += 1;
          }else {
            player.battleMove(1, 0, number);
            gameBattle.moveX -= 1;
          }
        }else if (Math.abs(gameBattle.moveY) !== 0){
          if (gameBattle.moveY < 0) {
            player.battleMove(0, -1, number);
            gameBattle.moveY += 1;
          }else {
            player.battleMove(0, 1, number);
            gameBattle.moveY -= 1;
          }
        }else {
          player.animationNumber = 1;
          Manager.Sprite.Player.clear(number);
          spriteBattle.rangeClear();
          Manager.Sprite.Player.draw(player.x, player.y, number);
          gameBattle.moved = true;
          gameBattle.selectEvent = "isSelect";
        }
      break;
      case "vertical":
        if (Math.abs(gameBattle.moveY) !== 0){
          if (gameBattle.moveY < 0) {
            player.battleMove(0, -1, number);
            gameBattle.moveY += 1;
          }else {
            player.battleMove(0, 1, number);
            gameBattle.moveY -= 1;
          }
        }else if (Math.abs(gameBattle.moveX) !== 0) {
          if (gameBattle.moveX < 0) {
            player.battleMove(-1, 0, number);
            gameBattle.moveX += 1;
          }else {
            player.battleMove(1, 0, number);
            gameBattle.moveX -= 1;
          }
        }else {
          player.animationNumber = 1;
          Manager.Sprite.Player.clear(number);
          spriteBattle.rangeClear();
          Manager.Sprite.Player.draw(player.x, player.y, number);
          gameBattle.moved = true;
          gameBattle.selectEvent = "isSelect";
        }
      break;
      default: throw new Error("方向が指定されていません");
    }

    spriteBattle.rainbow += 2;
    if (spriteBattle.rainbow > 360) { spriteBattle.drawMoveRangeCount = 0; }
  }

  toAttack() {

  }

  trunEnd() {
    const gameBattle = Manager.Game.Battle;
    gameBattle.init();
    this.anActorNumber = null;
    gameBattle.selectEvent = "whoseTrun";
  }
}
