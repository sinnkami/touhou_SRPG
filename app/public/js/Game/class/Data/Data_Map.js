class Data_Map {
  constructor() { this.fs = require("fs"); }
  test() {
    let image = new Image();
    image.src = "./public/images/chip.png";
    return [JSON.parse(this.fs.readFileSync("./public/json/GameData/Map/test.json")), image];
  }
}
