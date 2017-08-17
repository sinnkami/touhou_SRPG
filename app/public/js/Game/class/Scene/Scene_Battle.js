class Scene_Battle {
  move(number) {
    const player = Manager.Game.Menbers.get(number);
    const battle = Manager.Game.Battle;
    if (!battle.movementRangeInit) { battle.init(); }else { battle.initMovementRange(); }
    Manager.Sprite.Battle.allClear();

    Manager.Game.Battle.moveRange(player.mapX, player.mapY, 8);
  }
}
