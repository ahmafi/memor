import { BrowserWindow, Menu } from "electron";
import * as path from "path";

const homeWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "home.preload.bundle.js"),
    },
  });

  // Menu.setApplicationMenu(null);
  win.loadFile("./dist/home.bundle.html");

  win.webContents.openDevTools();
};

export default homeWindow;
