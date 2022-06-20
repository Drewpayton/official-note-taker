const notes = require('express').Router();
const path = require('path');
const fs = require('fs')
const { randomId } = require('../helpers/fsUtil')


notes.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

notes.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

notes.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let notelength = (noteList.length).toString();

    newNote.id = notelength;
    noteList.push(newNote);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
})

notes.delete("/api/notes/:id", (req, res) => {
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (req.params.id).toString();

    noteList = noteList.filter(selected =>{
        return selected.id != noteId;
    })

    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});

module.exports = notes;