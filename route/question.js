const express = require('express');
const question = require('../model/question');
const router = express.Router();

router.post('/addquestion', (req, res) => {
    var arr = new Array();
    arr.push(req.body.option1);
    arr.push(req.body.option2);
    arr.push(req.body.option3);
    arr.push(req.body.option4);
    var answer = req.body[req.body.answer];
    try {
        question.create({
            name: req.body.name,
            ques: req.body.ques,
            choice: arr,
            answer: answer
        })
            .then(() => {
                res.send('success');
            })
            .catch(() => {
                res.send('Error');
            })
    } catch (err) {
        res.send('Server Error');
    }
})


module.exports = router