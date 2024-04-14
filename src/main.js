'use strict';
const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const { usb } = require("usb")

let mWin = ""

function cW() {
    mWin = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js"),
        },
        resizable: false,
        darkTheme: true,
        icon: "favicon.ico",
        title: "Holy Trinity Academy [DATABASE] | (LOADING) [ RFID READER STATUS: DISCONNECTED ]",
        show: false
    });

    mWin.setMenuBarVisibility(false)

    mWin.loadFile("Application/index.html")

    mWin.once("ready-to-show", ()=>mWin.show())
}

app.whenReady().then(cW);

app.on('window-all-closed', ()=>{
    if (process.platform != 'darwin') app.quit();
})