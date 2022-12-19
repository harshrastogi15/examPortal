const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'December 19, 2022, 13:18:00';
    const EDate = 'December 19, 2022, 23:50:00';
    const presentDate = new Date();
    // console.log(presentDate)
    res.json({SDate:SDate, EDate:EDate, presentDate : presentDate});
})

module.exports = router;