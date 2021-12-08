import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  getClipboardText: () => ipcRenderer.invoke("get-clipboard-text"),
  ipcRenderer: ipcRenderer,
});
