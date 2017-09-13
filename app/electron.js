// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
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
      this.mainWindow = new BrowserWindow({
        width: 672,
        height: 480,
        center: true,
        resizable: false,
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
