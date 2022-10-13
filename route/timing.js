const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'October 13, 2022, 15:50:00';
    const EDate = 'October 13, 2022, 23:59:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;