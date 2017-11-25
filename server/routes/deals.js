const express = require('express');
const Deal = require('../models/deal');
const router = express.Router();

router.get('/deals', (req, res, next) => {    
    Deal.find()
    .then(deals => {
        console.log('were here with the deals info');
        // console.log(deals);
        res.json(deals);
    })
});

router.get('/deals/:id', (req, res, next) => {
    console.log('entering the backend')
    console.log('the id is', req.params.id)
    const id = req.params.id;
    Deal.findById(id)
    .then(deal => {
        console.log('deal found')
        console.log(deal)
        res.json(deal);
    })
})

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

router.patch('/deals/:id', (req, res, next) => {
    console.log('weve made it to the backend')
    console.log('params', req.params)
    console.log('body', req.body)

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
        console.log('the updated details are...', updatedDeal)
        res.json(updatedDeal);
    })
    
})

module.exports = router;