import { BrowserWindow, Menu } from 'electron';
import * as path from 'path';

const homeWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'home.preload.bundle.js'),
    },
  });

  /// #if !DEVELOPMENT
  Menu.setApplicationMenu(null);
  /// #endif

  /// #if DEV_SERVER
  win.loadURL(`http://localhost:${process.env.DEV_PORT}/home.bundle.html`);
  /// #else
  win.loadFile('./dist/home.bundle.html');
  /// #endif

  /// #if DEVELOPMENT
  win.webContents.openDevTools();
  /// #endif
};

export default homeWindow;
