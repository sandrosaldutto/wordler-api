const express = require('express');
const router = express.Router();
const fs = require("fs");

const getLetters = () => {
    const letters = fs.readFileSync('./data/letters.json')
    return JSON.parse(letters)
}

router.get('/letters', (_req, res) => {
    let letter = getLetters()
    .map(letter => {
        return {
            "key": letter.key
        }
    })
    
    res.status(200).json(letter);
    
})

module.exports = router;