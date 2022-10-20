const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'October 20, 2022, 1:00:00';
    const EDate = 'October 20, 2022, 23:59:00';
    res.json({SDate:SDate, EDate:EDate});
})

module.exports = router;