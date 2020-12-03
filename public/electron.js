const electron = require("electron");
const app = electron.app;
const { ipcMain, dialog } = require("electron")
const os = require("os")
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        maxWidth: 467,
        maxHeight: 480,
        minWidth: 467,
        minHeight: 480,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );

    mainWindow.once("ready-to-show", ()=>{
        mainWindow.show();
    })

    mainWindow.on("closed", () => (mainWindow = null));

    ipcMain.on('open-folder', (event, args)=>{
        const options = {
            title: "Selecione uma pasta",
            defaultPath: os.homedir(),
            buttonLabel: "Selecionar",
            properties: ["openDirectory"]
        }
        const directory = dialog.showOpenDialog(options)
        directory.then(folder => event.reply('directory', folder.filePaths[0]))
    })

    //Remova esse e o comentário abaixo quando a aplicação estiver pronta
    //mainWindow.removeMenu()
}


app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});