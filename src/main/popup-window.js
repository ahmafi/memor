import { BrowserWindow } from 'electron';
import * as path from 'path';

const popupWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'popup.preload.bundle.js'),
    },
    frame: false,
    resizable: false,
  });

  win.loadFile('./dist/popup.bundle.html');

  win.on('blur', () => {
    win.close();
  });
};

export default popupWindow;
