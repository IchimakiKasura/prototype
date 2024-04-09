'use strict';
const sqlite3 = require('sqlite3').verbose()
const { contextBridge, ipcRenderer } = require('electron')

const db = new sqlite3.Database('./database/school.db', sqlite3.OPEN_READWRITE)

db.all(`SELECT * FROM STUDENTS`, (err, rows)=>{
    contextBridge.exposeInMainWorld('student', rows)
})
// db.all(`SELECT * FROM STUDENTS_SUB`, (err, rows)=>{ STUDENTS_SUB = rows })