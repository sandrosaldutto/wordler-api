const express = require('express');
const router = express.Router();
const fs = require("fs");
const cors = require("cors");

const getWord = () => {
    const words = fs.readFileSync('./data/words.json')
    return JSON.parse(words)
}

router.get('/words', cors(), (_req, res) => {
    let word = getWord()
    .map(word => {
        return {
            "question": word.question,
            "answer": word.answer
        }
    })
    
    res.status(200).json(word);
    
})

module.exports = router;