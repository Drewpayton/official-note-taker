const fs = require('fs');
const util = require('util');
const random = require('uuid');


const readFromFile = util.promisify(fs.readFile)

const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        err ? console.log(err) : console.info(`Data written to ${destination}`)
    })
}

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData)
        }
    })
}

const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };


module.exports = { readFromFile, writeToFile, readAndAppend, randomId }