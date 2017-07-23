const Manager = new Game_Manager([
  new Data_Base([new Data_Player(), new Data_Map()]),
  new Game_Base([new Game_Menbers(), new Game_Map(), new Game_Key()]),
  new Scene_Base([]),
  new Sprite_Base([new Sprite_Map(), new Sprite_Player()]),
  new Window_Base([])
]);
const $body = $("body");
const Stats = require('stats.js');
const stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

$(function () {
  const map = document.getElementById('map');
  const map_context = map.getContext('2d');
  Manager.ctxMap = map_context;

  const player = document.getElementById('player');
  const player_context = player.getContext('2d');
  Manager.ctxPlayer = player_context;

  const window = document.getElementById('window');
  const window_context = window.getContext('2d');
  Manager.ctxWindow = window_context;

  const anime = document.getElementById('anime');
  const anime_context = anime.getContext('2d');
  Manager.ctxAnime = anime_context;

  Manager.GameWidth = map.width;
  Manager.GameHeight = map.height;
})
