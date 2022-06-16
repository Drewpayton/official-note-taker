const express = require('express');
const home = require('./routes/home')
const notes = require('./routes/notes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


const PORT = process.env.PORT || 3001;

app.get('/', home)

app.get('/notes', notes)

app.get('/api/notes', notes)

app.post('/api/notes', notes)

// app.get('/api/notes/:id', notes) 

// app.delete('api/notes/:id', notes)












app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))