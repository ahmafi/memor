import { BrowserWindow } from 'electron';
import * as path from 'path';

const popupWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'popup.preload.bundle.js'),
    },
    /// #if !DEVELOPMENT
    frame: false,
    /// #endif
    resizable: false,
  });

  /// #if DEV_SERVER
  win.loadURL(`http://localhost:${process.env.DEV_PORT}/popup.bundle.html`);
  /// #else
  win.loadFile('./dist/popup.bundle.html');
  /// #endif

  /// #if !DEVELOPMENT
  win.on('blur', () => {
    win.close();
  });
  /// #endif
};

export default popupWindow;
