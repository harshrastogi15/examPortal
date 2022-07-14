const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'July 14, 2022, 19:03:00';
    const EDate = 'July 14, 2022, 20:00:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;