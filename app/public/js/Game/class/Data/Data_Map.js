class Data_Map {
  constructor() { this.fs = require("fs"); }
  test() { return JSON.parse(this.fs.readFileSync("./public/json/GameData/Map/test.json"))}
}
