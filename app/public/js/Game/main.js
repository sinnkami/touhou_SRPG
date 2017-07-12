const Manager = new Game_Manager([
  new Data_Base([new Data_Player(), new Data_Map()]),
  new Game_Base([new Game_Player(), new Game_Map()]),
  new Scene_Base([]),
  new Sprite_Base([new Sprite_Map()]),
  new Window_Base([])
]);

$(function () {
  const main = document.getElementById('main');
  const main_context = main.getContext('2d');
  Manager.main = main;
  Manager.main_context = main_context;

  const window = document.getElementById('window');
  const window_context = window.getContext('2d');
  Manager.window = window;
  Manager.window_context = window_context;

  const anime = document.getElementById('anime');
  const anime_context = anime.getContext('2d');
  Manager.anime = anime;
  Manager.anime_context = anime_context;

})
