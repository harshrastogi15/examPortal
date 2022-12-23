const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'December 23, 2022, 13:11:00';
    const EDate = 'December 23, 2022, 21:55:00';
    const presentDate = new Date();
    // console.log(presentDate)
    res.json({SDate:SDate, EDate:EDate, presentDate : presentDate});
})

module.exports = router;