const express = require('express');

const router = express.Router();

router.get('/timing',(req,res)=>{
    const SDate = 'July 16, 2022, 22:50:00';
    res.json({date:SDate});
})

module.exports = router;