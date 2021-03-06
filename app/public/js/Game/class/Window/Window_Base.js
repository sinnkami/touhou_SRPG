class Window_Base {
  constructor(class_data) {
    class_data.forEach((value, num) => {
      let name = value.constructor.name.split("_");
      this[`${name[1]}`] = value;
    })
  }

  clear() {
    Manager.ctxWindow.canvas.width = Manager.ctxWindow.canvas.width;
    Manager.ctxWindow.canvas.height = Manager.ctxWindow.canvas.height;
  }
}
