class Canvas {
  init() {
    if (Manager.ctxMap) { this.ctxMap = Manager.ctxMap; }else { this.ctxMap = null; }
    if (Manager.ctxWindow) { this.ctxWindow = Manager.ctxWindow; }else { this.ctxWindow = null; }
    if (Manager.ctxAnime) { this.ctxAnime = Manager.ctxAnime; }else { this.ctxAnime = null; }
    if (Manager.ctxPlayer) { this.ctxPlayer = Manager.ctxPlayer; }else { this.ctxPlayer = null; }
    if (Manager.GameWidth) { this.width = Manager.GameWidth; }else { this.width = null; }
    if (Manager.GameHeight) { this.height = Manager.GameHeight; }else { this.height = null; }
  }

  create(data_name) {
    if (!data_name) { throw new Error("チップデータが選択されていません"); }
    let data = Manager.Data.Map[`${data_name}`]();
    return data;
  }
}
