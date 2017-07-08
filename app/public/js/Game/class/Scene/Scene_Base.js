class Scene_Base {
  constructor(class_data) {
    class_data.forEach((value, num) => {
      let name = value.constructor.name.split("_");
      this[`${name[1]}`] = value;
    })
  }
}
