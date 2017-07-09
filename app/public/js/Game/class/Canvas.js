class Canvas {
  init() {
    if (Manager.canvas) { this.canvas = Manager.canvas; }else { this.canvas = null; }
    if (Manager.context) { this.context = Manager.context; }else { this.context = null; }
    if (this.canvas) { this.width = this.canvas.width; this.height = this.canvas.height; }
  }

  create(data_name) {
    if (!data_name) { throw new Error("チップデータが選択されていません"); }
    let data = Manager.Data.Map[`${data_name}`]();
    return data;
  }
}
