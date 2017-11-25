const express = require('express');
const Deal = require('../models/deal');
const router = express.Router();

router.get('/deals', (req, res, next) => {    
    Deal.find()
    .then(deals => {
        res.json(deals);
    })
});

router.get('/deals/:id', (req, res, next) => {
    const id = req.params.id;
    Deal.findById(id)
    .then(deal => {
        res.json(deal);
    })
})

router.post('/deals', (req, res, next)=>{
    const {companyName, companyLogoUrl, dealName, categoryName, description} = req.body;

    const deal = new Deal({
        companyName, 
        companyLogoUrl, 
        dealName, 
        categoryName, 
        description
    });

    Deal.create(deal, err => {
        if (err) {
          return next(err);
        }
        res.json({
          success: true
        });
      });
})

router.patch('/deals/:id', (req, res, next) => {

    const dealId = req.params.id;
    const {companyName, companyLogoUrl, dealName, categoryName, description} = req.body;
    
        const dealInfoToUpdate = {
            companyName, 
            companyLogoUrl, 
            dealName, 
            categoryName, 
            description
        };

    Deal.findByIdAndUpdate(dealId, dealInfoToUpdate, { new: true})
    .then(updatedDeal => {
        res.json(updatedDeal);
    })
    
})

module.exports = router;