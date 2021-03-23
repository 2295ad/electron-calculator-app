const {app, BrowserWindow} = require('electron');

function createWindow () {
    let mainWindow = new BrowserWindow({
        width: 300,
        height: 460,
        icon:'app/calci.jpg',
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
        }
      });
    mainWindow.loadFile('./app/index.html');
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setResizable(true);
}
app.whenReady().then(createWindow);