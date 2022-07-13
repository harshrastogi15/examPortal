const express = require('express');
const CSE = require('../model/CSE');
const ECE = require('../model/ECE');
const Math = require('../model/Math');
const MEA = require('../model/MEA');
const question = require('../model/question');
const router = express.Router();

router.post('/addquestion', (req, res) => {
    var stream = req.body.stream;
    var arr = new Array();
    arr.push(req.body.option1);
    arr.push(req.body.option2);
    arr.push(req.body.option3);
    arr.push(req.body.option4);
    var answer = req.body[req.body.answer];
    try {
        if (stream === 'CSE') {
            CSE.create({
                name: req.body.name,
                ques: req.body.ques,
                choice: arr,
                answer: answer
            })
                .then(() => {
                    res.json({ status: 0 });
                })
                .catch(() => {
                    res.json({ status: -1 });
                })
        }
        else if (stream === 'MEA') {
            MEA.create({
                name: req.body.name,
                ques: req.body.ques,
                choice: arr,
                answer: answer
            })
                .then(() => {
                    res.json({ status: 0 });
                })
                .catch(() => {
                    res.json({ status: -1 });
                })
        }
        else if (stream === 'ECE') {
            ECE.create({
                name: req.body.name,
                ques: req.body.ques,
                choice: arr,
                answer: answer
            })
                .then(() => {
                    res.json({ status: 0 });
                })
                .catch(() => {
                    res.json({ status: -1 });
                })
        }
        else if (stream === 'Math') {
            Math.create({
                name: req.body.name,
                ques: req.body.ques,
                choice: arr,
                answer: answer
            })
                .then(() => {
                    res.json({ status: 0 });
                })
                .catch(() => {
                    res.json({ status: -1 });
                })
        } else {
            res.json({ status: -1 });
        }
    } catch (err) {
        res.json({ status: -1 });
    }
})


router.post('/sendquestion', async (req, res) => {
    try {
        var stream = req.body.stream;
        var data = new Array();
        if (stream === 'CSE') {
            var ques = await CSE.find({});
            for (i in ques) {
                data.push({
                    question: ques[i].ques,
                    choice: ques[i].choice,
                    id: ques[i]._id
                })
            }
        }
        else if (stream === 'MEA') {
            var ques = await MEA.find({});
            for (i in ques) {
                data.push({
                    question: ques[i].ques,
                    choice: ques[i].choice,
                    id: ques[i]._id
                })
            }
        }
        else if (stream === 'ECE') {
            var ques = await ECE.find({});
            for (i in ques) {
                data.push({
                    question: ques[i].ques,
                    choice: ques[i].choice,
                    id: ques[i]._id
                })
            }
        }
        else if (stream === 'Math') {
            var ques = await Math.find({});
            for (i in ques) {
                data.push({
                    question: ques[i].ques,
                    choice: ques[i].choice,
                    id: ques[i]._id
                })
            }
        }

        res.json({ status: 0, data })
    } catch (error) {
        res.json({ status: -1 })
    }
})

module.exports = router