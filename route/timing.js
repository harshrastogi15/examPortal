const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'December 13, 2022, 14:08:00';
    const EDate = 'December 13, 2022, 23:50:00';
    const presentDate = new Date();
    // console.log(presentDate)
    res.json({SDate:SDate, EDate:EDate, presentDate : presentDate});
})

module.exports = router;