const notes = require('express').Router();
const path = require('path');
const fs = require('fs')


notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

notes.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

notes.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let notesList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteLength = (notesList.length).toString()
    
    newNote.id = noteLength;
    notesList.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesList));
    res.json(notesList);

})

// notes.get("/api/notes/:id", (req, res) => {
//     let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     let noteId = (req.params.id)



//     // res.json(noteId)
// });


module.exports = notes;