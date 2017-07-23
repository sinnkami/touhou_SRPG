class Data_Player {
  constructor() {
    this.fs = require("fs");
    this.images = {};

    let data = this.fs.readdirSync("./public/images/Game/Player");
    data.forEach((value) => {
      let image = new Image();
      image.src = `./public/images/Game/Player/${value}`;
      this.images[`${value.split(".")[0]}`] = image;
    })
  }
  ReimuHakurei() {
    let json = JSON.parse(this.fs.readFileSync("./public/json/GameData/Player/ReimuHakurei.json"));
    console.log(json.data.image);
    let image = this.images[json.data.image.name];
    return [json.data, image];
  }
}

// Object.getOwnPropertyNames(Manager.Data.Player.__proto__);
