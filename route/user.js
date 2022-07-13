const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtaccess = require("../middleware/jwtverification");
const User = require("../model/user");
const router = express.Router();


router.post(
    "/register",
    async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ status: 1 });
            }
            bcrypt.hash(req.body.password, 10, async function (err, hash) {
                var arr = new Array();
                user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    password: hash,
                    answer : arr
                })
                    .then((user) => {
                        res.status(200).json({ status: 0 })
                    })
                    .catch((error) => res.status(400).json({ status: -1 }));
            });
        } catch (error) {
            res.status(500).json({ status: -2 });
        }
    }
);



router.post(
    "/login",
    async (req, res) => {
        const { email, password } = req.body;
        // console.log(req.body)
        try {
            let user = await User.findOne({ email: email });
            if (!user) {
                return res.json({ status: -1 })
            }
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                data = {
                    id: user._id
                }
                var authtoken = jwt.sign(data, process.env.JWT_TOKEN);
                res.status(200).json({ status: 0, authtoken });
            } else {
                return res.status(400).json({ status: -1 });
            }

        } catch (error) {
            res.status(500).json({ status: -2 ,error});
        }
    }
);

router.post('/access', jwtaccess, async (req, res) => {
    try {
        var user = await User.findById(req.userid);
        if (!user) {
            return res.status(400).json({ status: -1 });
        }
        var data = {
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            pincode: user.pincode
        }
        res.json({ status: 0, data });
    } catch (error) {
        res.status(500).json({ status: -2 });
    }
})

module.exports = router;