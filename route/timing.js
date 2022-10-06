const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'October 6, 2022, 22:03:00';
    const EDate = 'October 10, 2022, 24:00:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;