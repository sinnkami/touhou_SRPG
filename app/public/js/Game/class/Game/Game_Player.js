class Game_Player extends Game_Character {
  constructor(name) {
    let data = Manager.Data.Player[name]();
    super(data[0], data[1]);
  }
}
