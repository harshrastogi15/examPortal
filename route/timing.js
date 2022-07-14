const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'July 14, 2022, 14:23:00';
    const EDate = 'July 16, 2022, 15:00:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;