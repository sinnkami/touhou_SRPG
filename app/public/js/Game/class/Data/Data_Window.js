class Data_Window {
  constructor() {
    this.fs = require("fs");
    this.images = {};

    let data = this.fs.readdirSync("./public/images/Game/Window");
    data.forEach((value) => {
      let image = new Image();
      image.src = `./public/images/Game/Window/${value}`;
      this.images[`${value.split(".")[0]}`] = image;
    })
  }

  redWindow() {
    return this.images["red_mesframe"];
  }

  blueWindow() {
    return this.images["blue_mesframe"];
  }

  battleWindow() {
    return this.images["battleWindow"];
  }
}
