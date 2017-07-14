class Game_Map {
  init() {
    this.maxX = Manager.GameWidth / 32;
    this.maxY = Manager.GameHeight / 32;
    this.data = null;
    this.chip = { width: 32, height: 32 , image: null };
  }

  get(data_name) {
    if (!data_name) { throw new Error("データの名前が指定されていません"); }
    let data = Manager.Data.Map[data_name]();
    this.data = data[0];
    this.chip.image = data[1];
    return true;
  }
}
