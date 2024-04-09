'use strict';
const { app, BrowserWindow } = require('electron');
const path = require('node:path');

let mWin = ""

function cW() {
    mWin = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        },
        resizable: false,
        darkTheme: true,
        icon: "favicon.ico",
        title: "Holy Trinity Academy [DATABASE] | (LOADING)"
    });

    mWin.setMenuBarVisibility(false)

    mWin.loadFile("Application/index.html")
}

app.whenReady().then(cW);

app.on('window-all-closed', ()=>{
    if (process.platform != 'darwin') app.quit();
})