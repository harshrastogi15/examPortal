const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'August 6, 2022, 10:17:00';
    const EDate = 'August 6, 2022, 11:00:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;