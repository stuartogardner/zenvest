const express = require('express');
const Deal = require('../models/deal');
const router = express.Router();

router.get('/deals', (req, res, next) => {    
    Deal.find()
    .then(deals => {
        console.log('were here with the deals info');
        console.log(deals);
        res.json(deals);
    })
});

router.post('/deals', (req, res, next)=>{
    console.log('were in the backend')
    console.log(req.body);
    const {companyName, companyLogoUrl, dealName, categoryName, description} = req.body;

    const deal = new Deal({
        companyName, 
        companyLogoUrl, 
        dealName, 
        categoryName, 
        description
    });

    console.log('deal', deal);

    Deal.create(deal, err => {
        console.log('entering the save')
        if (err) {
          return next(err);
        }
        res.json({
          success: true
        });
      });
})

module.exports = router;