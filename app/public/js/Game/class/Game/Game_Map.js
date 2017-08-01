class Game_Map {
  init() {
    this.maxX = null;
    this.maxY = null;
    this.data = null;
    this.chip = { width: 32, height: 32 , image: null };
    //最小 x:23 y:19
    this.center = { x: {start: 11, len: 12}, y: {start: 10, len: 11} };
    this.number = 100;// 100番目からマップチップ
  }

  get(data_name) {
    if (!data_name) { throw new Error("データの名前が指定されていません"); }
    let data = Manager.Data.Map[data_name]();
    this.data = data[0];
    this.maxY = data[0][0].length * this.chip.height;
    this.maxX = data[0][0].length * this.chip.width;
    this.chip.image = data[1];
    return true;
  }
}
