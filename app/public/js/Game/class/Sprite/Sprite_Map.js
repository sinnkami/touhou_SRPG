class Sprite_Map extends Canvas{
  init() {
    super.init();
    this.maxX = this.width / 32;
    this.maxY = this.height / 32;
    this.data = null;
    this.chip = { width: 32, height: 32 , image: null };
  }

  draw(data_name) {
    if (!this.canvas) { this.init(); }
    if (!this.chip.image) {
      let data = this.create(data_name);
      this.data = data[0];
      this.chip.image = data[1]; 
    }
    console.log(this);
  }
}
