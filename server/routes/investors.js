const express = require('express');
const Investor = require('../models/investor');
const router = express.Router();

router.get('/investors', (req, res, next) => {   
    Investor.find()
    .then(deals => {
        res.json(deals);
    })
});

module.exports = router;