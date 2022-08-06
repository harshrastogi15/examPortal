const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'July 15, 2022, 10:17:00';
    const EDate = 'July 16, 2022, 24:00:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;