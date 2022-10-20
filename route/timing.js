const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'October 20, 2022, 16:20:00';
    const EDate = 'October 20, 2022, 20:00:00';
    const presentDate = new Date();
    // console.log(presentDate)
    res.json({SDate:SDate, EDate:EDate, presentDate : presentDate});
})

module.exports = router;