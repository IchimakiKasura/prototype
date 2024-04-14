'use strict';
// const sqlite3 = require('sqlite3').verbose()
const { contextBridge } = require('electron')
const { usb } = require('usb')
const { exec } = require('child_process');

// const db = new sqlite3.Database('./database/school.db', sqlite3.OPEN_READWRITE)

// db.all(`SELECT * FROM STUDENTS`, (err, rows)=>{
//     contextBridge.exposeInMainWorld('student', rows)
// })
// db.all(`SELECT * FROM STUDENTS_SUB`, (err, rows)=>{ STUDENTS_SUB = rows })

let rfidInput;

document.addEventListener("DOMContentLoaded", ()=>{

    rfidInput = document.querySelector("#rfid_code");

    usb.getDeviceList().forEach((devices)=>{
        if(!checkUSB(devices)) return;

        document.title = document.title.replace(/DISCONNECTED/g, "CONNECTED")
        rfidInput.setAttribute("placeholder", "RFID CONNECTED")
    })
})

usb.on("attach", (data)=>{
    if(!checkUSB(data)) return;

    document.title = document.title.replace(/DISCONNECTED/g, "CONNECTED")
    rfidInput.setAttribute("placeholder", "RFID CONNECTED")

})

usb.on("detach", (data)=>{
    if(!checkUSB(data)) return;

    document.title = document.title.replace(/CONNECTED/g, "DISCONNECTED")
    rfidInput.setAttribute("placeholder", "RFID DISCONNECTED")
})

function checkUSB(data)
{
    let idVendor = data.deviceDescriptor.idVendor;
    let idProduct = data.deviceDescriptor.idProduct;

    if(idVendor != 1245 && idProduct != 5379) return false;
    return true
}

contextBridge.exposeInMainWorld("openBrowser", {
    open() { exec('start https://github.com/IchimakiKasura/prototype') }
})