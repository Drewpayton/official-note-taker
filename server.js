const fs = require("fs");
const express = require("express");
const path = require("path");
const notes = require('./routes/notes')

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', notes)

app.get('/api/notes', notes)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post('/api/notes', notes)


app.delete("/api/notes/:id", notes)

app.listen(PORT, () => console.log("Server listening on port " + PORT));