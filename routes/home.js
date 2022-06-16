const home = require('express').Router();
const path = require('path');


home.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = home


