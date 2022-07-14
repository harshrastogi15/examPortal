const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'July 14, 2022, 12:56:00';
    const EDate = 'July 14, 2022, 13:30:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;