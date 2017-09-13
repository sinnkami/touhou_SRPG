// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
const ratio = require('aspect-ratio');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

class App {
  constructor() {
    this.app = app;
    this.mainWindow = null;

    this.app.commandLine.appendSwitch("disable-renderer-backgrounding");

    this.app.on('window-all-closed', ()=> {
      this.app.quit();
    });

    this.app.on('ready', ()=> {
      const size = electron.screen.getPrimaryDisplay().size;
      const aspect = ratio(size.width, size.height).split(":");
      this.mainWindow = new BrowserWindow({
        width: Number(aspect[0])*84,
        height: Number(aspect[1])*96,
        center: true,
        resizable: true,
        fullscreen: false,
        useContentSize: true,
        'node-integration': false,
        backgroundColor: "#000000"
      });

      this.mainWindow.on('closed', ()=> {
        this.mainWindow = null;
        this.app.quit();
      });

      this.mainWindow.loadURL(`file://${__dirname}/index.html`);
    });

  }

  openDevTools() {
    this.mainWindow.webContents.openDevTools()
  }
}

new App();
