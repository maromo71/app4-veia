const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const menuTemplate = require('./js/menutemplate');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    },
    icon: __dirname + '/resources/img/icon.png'
  })
  let templateMenu = menuTemplate.geraMenuPrincipalTemplate(app);
  let menuPrincipal = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menuPrincipal);
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

let jogadaWindow = null;
ipcMain.on('abrir-janela-jogadafail', () => {
  if (jogadaWindow == null) {
    jogadaWindow = new BrowserWindow({
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
      },
      width: 350,
      height: 280,
      alwaysOnTop: true,
      frame: false
    });

    jogadaWindow.on('closed', () => {
      jogadaWindow = null;
    });
  }
  jogadaWindow.loadURL(__dirname + "/jogadafail.html");
});


let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
      },
      width: 420,
      height: 380,
      alwaysOnTop: true,
      frame: false
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }
  sobreWindow.loadURL(__dirname + "/sobre.html");
});

ipcMain.on('fechar-janela-jogadafail', () => {
  console.log('fechando jogadada fail');
  jogadaWindow.close();
});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});