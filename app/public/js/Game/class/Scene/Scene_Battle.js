class Scene_Battle {
  move(number) {
    var player = Manager.Game.Menbers.get(number);
    Manager.Game.Battle.init();
    Manager.Game.Battle.moveRange(player.mapX, player.mapY, 3);
  }
}