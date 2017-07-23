class Game_Menbers {
  constructor() {
    this.all = [];
  }

  set(name, number) {
    if (this.all.length === Manager.menbersLength && !number){
      return false;
    }
    if (!number){
      this.all.push(new Game_Player(name));
    }else {
      this.all[number] = new Game_Player(name);
    }
    return true;
  }

  get(number) {
    return this.all[number];
  }
}
