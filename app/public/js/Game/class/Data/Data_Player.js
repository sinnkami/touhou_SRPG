class Data_Player {
  constructor() { this.fs = require("fs"); }
  ReimuHakurei() { return JSON.parse(this.fs.readFileSync("./public/json/GameData/Player/ReimuHakurei.json")).data; }
}

// Object.getOwnPropertyNames(Manager.Data.Player.__proto__);
