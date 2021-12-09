import {
  app, BrowserWindow, ipcMain, clipboard, globalShortcut,
} from 'electron';

import homeWindow from './home-window';
import popupWindow from './popup-window';

app.whenReady().then(() => {
  globalShortcut.register('Alt+Q', () => {
    popupWindow();
  });

  homeWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) homeWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('get-clipboard-text', async () => {
  const clipboardText = clipboard.readText();
  return clipboardText;
});
