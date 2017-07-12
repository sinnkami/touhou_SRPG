class Canvas {
  init() {
    if (Manager.main) { this.main = Manager.main; }else { this.main = null; }
    if (Manager.main_context) { this.main_context = Manager.main_context; }else { this.main_context = null; }

    if (Manager.window) { this.window = Manager.window; }else { this.window = null; }
    if (Manager.window_context) { this.window_context = Manager.window_context; }else { this.window_context = null; }

    if (Manager.anime) { this.anime = Manager.anime; }else { this.anime = null; }
    if (Manager.anime_context) { this.anime_context = Manager.anime_context; }else { this.anime_context = null; }

    if (this.main) { this.width = this.main.width; this.height = this.main.height; }
  }

  create(data_name) {
    if (!data_name) { throw new Error("チップデータが選択されていません"); }
    let data = Manager.Data.Map[`${data_name}`]();
    return data;
  }
}
