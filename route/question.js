const express = require("express");
const CSE = require("../model/CSE");
const ECE = require("../model/ECE");
const Math = require("../model/Math");
const MEA = require("../model/MEA");
// const question = require("../model/question");
const path = require("path");
const fs = require("fs");
const upload = require("../middleware/imgUpd");
const router = express.Router();

router.post("/addquestion", upload.single('img'), (req, res) => {
  var stream = req.body.stream;
  var arr = new Array();
  arr.push(req.body.option1);
  arr.push(req.body.option2);
  arr.push(req.body.option3);
  arr.push(req.body.option4);
  var answer = req.body[req.body.answer];
  var data = {
    ques: req.body.ques,
    choice: arr,
    answer: answer,
  }
  if (req.file !== undefined) {
    data['img'] = {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
    fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
  }

  try {
    if (stream === "CSE") {
      CSE.create(data)
        .then(() => {
          res.json({ status: 0 });
        })
        .catch(() => {
          res.json({ status: -1 });
        });
    } else if (stream === "MEA") {
      MEA.create(data)
        .then(() => {
          res.json({ status: 0 });
        })
        .catch(() => {
          res.json({ status: -1 });
        });
    } else if (stream === "ECE") {
      ECE.create(data)
        .then(() => {
          res.json({ status: 0 });
        })
        .catch(() => {
          res.json({ status: -1 });
        });
    } else if (stream === "Math") {
      Math.create(data)
        .then(() => {
          res.json({ status: 0 });
        })
        .catch(() => {
          res.json({ status: -1 });
        });
    } else {
      res.json({ status: -1 });
    }
  } catch (err) {
    res.json({ status: -1 });
  }
});

// router.post(
//   "/addimagequestion",
//   upload.array(["ques", "opt1", "opt2", "opt3", "opt4"]),
//   (req, res) => {
//     var stream = req.body.stream;
//     var arr = new Array();
//     arr.push(
//       fs.readFileSync(
//         path.join(__dirname, "../uploads/" + req.files[1].filename)
//       )
//     );
//     arr.push(
//       fs.readFileSync(
//         path.join(__dirname, "../uploads/" + req.files[2].filename)
//       )
//     );
//     arr.push(
//       fs.readFileSync(
//         path.join(__dirname, "../uploads/" + req.files[3].filename)
//       )
//     );
//     arr.push(
//       fs.readFileSync(
//         path.join(__dirname, "../uploads/" + req.files[4].filename)
//       )
//     );
//     var ans = req.body[req.body.answer];
//     try {
//       if (stream === "CSE") {
//         CSE.create({
//           type: "img",
//           quesImg: fs.readFileSync(
//             path.join(__dirname, "../uploads/" + req.files[0].filename)
//           ),
//           choiceImg: arr,
//           answer: answer,
//         })
//           .then(() => {
//             res.json({ status: 0 });
//           })
//           .catch(() => {
//             res.json({ status: -1 });
//           });
//       } else if (stream === "MEA") {
//         MEA.create({
//           type: "img",
//           quesImg: fs.readFileSync(
//             path.join(__dirname, "../uploads/" + req.files[0].filename)
//           ),
//           choice: arr,
//           answer: answer,
//         })
//           .then(() => {
//             res.json({ status: 0 });
//           })
//           .catch(() => {
//             res.json({ status: -1 });
//           });
//       } else if (stream === "ECE") {
//         ECE.create({
//           type: "img",
//           quesImg: fs.readFileSync(
//             path.join(__dirname, "../uploads/" + req.files[0].filename)
//           ),
//           choice: arr,
//           answer: answer,
//         })
//           .then(() => {
//             res.json({ status: 0 });
//           })
//           .catch(() => {
//             res.json({ status: -1 });
//           });
//       } else if (stream === "Math") {
//         Math.create({
//           type: "img",
//           quesImg: fs.readFileSync(
//             path.join(__dirname, "../uploads/" + req.files[0].filename)
//           ),
//           choice: arr,
//           answer: answer,
//         })
//           .then(() => {
//             res.json({ status: 0 });
//             // fs.unlinkSync(
//             //   path.join(__dirname, "../uploads/" + req.files[0].filename)
//             // );
//             // fs.unlinkSync(
//             //   path.join(__dirname, "../uploads/" + req.files[1].filename)
//             // );
//             // fs.unlinkSync(
//             //   path.join(__dirname, "../uploads/" + req.files[2].filename)
//             // );
//             // fs.unlinkSync(
//             //   path.join(__dirname, "../uploads/" + req.files[3].filename)
//             // );
//             // fs.unlinkSync(
//             //   path.join(__dirname, "../uploads/" + req.files[4].filename)
//             // );
//           })
//           .catch(() => {
//             res.json({ status: -1 });
//           });
//       } else {
//         res.json({ status: -1 });
//       }
//     } catch (err) {
//       res.json({ status: -1 });
//     }
//   }
// );

router.post("/sendquestion", async (req, res) => {
  try {
    var stream = req.body.stream;
    var data = new Array();
    if (stream === "CSE") {
      var ques = await CSE.find({});
      for (i in ques) {
        data.push({
          question: ques[i].ques,
          choice: ques[i].choice,
          id: ques[i]._id,
          image: ques[i].img
        });

      }
    } else if (stream === "MEA") {
      var ques = await MEA.find({});
      for (i in ques) {
        data.push({
          question: ques[i].ques,
          choice: ques[i].choice,
          id: ques[i]._id,
          image: ques[i].img
        });
        
      }
    } else if (stream === "ECE") {
      var ques = await ECE.find({});
      for (i in ques) {
        data.push({
          question: ques[i].ques,
          choice: ques[i].choice,
          id: ques[i]._id,
          image: ques[i].img
        });
      }
    } else if (stream === "Math") {
      var ques = await Math.find({});
      for (i in ques) {
        data.push({
          question: ques[i].ques,
          choice: ques[i].choice,
          id: ques[i]._id,
          image: ques[i].img
        });

      }
    }

    res.json({ status: 0, data });
  } catch (error) {
    res.json({ status: -1 });
  }
});

module.exports = router;
