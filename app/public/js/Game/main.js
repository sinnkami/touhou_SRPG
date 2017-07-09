const Manager = new Game_Manager([
  new Data_Base([new Data_Player(), new Data_Map()]),
  new Game_Base([new Game_Player()]),
  new Scene_Base([]),
  new Sprite_Base([new Sprite_Map()]),
  new Window_Base([])
]);

$(function () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  Manager.canvas = canvas;
  Manager.context = context;
})
