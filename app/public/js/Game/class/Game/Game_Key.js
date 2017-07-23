class Game_Key {
  constructor() {
    this.push = false;
    this.input = {
         up: false,
       down: false,
      right: false,
       left: false,
      enter: false,
       back: false,
      shift: false,
    }
  }

  keydown() {
    $body.keydown((event) => {
      switch (event.keyCode) {
        case 38: // up
          this.input.up = true;
          this.push = true;
          break;
        case 40: // down
          this.input.down = true;
          this.push = true;
          break;
        case 37: // left
          this.input.left = true;
          this.push = true;
          break;
        case 39: // right
          this.input.right = true;
          this.push = true;
          break;

        // enter
        case 13: // enter
          this.input.enter = true;
          this.push = true;
          break;
        case 32: // space
          this.input.enter = true;
          this.push = true;
          break;
        case 90: // Z
          this.input.enter = true;
          this.push = true;
          break;

        // back
        case 27: // etc
          this.input.back = true;
          this.push = true;
          break;
        case 8: //delete
          this.input.back = true;
          this.push = true;
          break;
        case 88: // X
          this.input.back = true;
          this.push = true;
          break;

        // shift
        case 16: // shift
          this.input.shift = true;
          this.push = true;
          break;
      }
    })
  }

  keyup() {
    $body.keyup((event) => {
      switch (event.keyCode) {
        case 38: // up
          this.input.up = false;
          break;
        case 40: // down
          this.input.down = false;
          break;
        case 37: // left
          this.input.left = false;
          break;
        case 39: // right
          this.input.right = false;
          break;

        // enter
        case 13: // enter
          this.input.enter = false;
          break;
        case 32: // space
          this.input.enter = false;
          break;
        case 90: // Z
          this.input.enter = false;
          break;

        // back
        case 27: // etc
          this.input.back = false;
          break;
        case 8: //delete
          this.input.back = false;
          break;
        case 88: // X
          this.input.back = false;
          break;

        // shift
        case 16: // shift
          this.input.shift = false;
          break;
      }
    })
    this.push = false;
  }
}
