class Data_Map {
  constructor() {
    this.fs = require("fs");
    this.images = {};

    let data = this.fs.readdirSync("./public/images/Game/MapChip");
    data.forEach((value) => {
      let image = new Image();
      image.src = `./public/images/Game/MapChip/${value}`;
      this.images[`${value.split(".")[0]}`] = image;
    })
  }
  test() {
    let json = JSON.parse(this.fs.readFileSync("./public/json/GameData/Map/test.json"));
    let image = this.images[json.image];
    return [json.data, image];
  }
}
