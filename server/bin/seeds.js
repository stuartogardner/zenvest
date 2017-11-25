const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zenvest', function(){
  mongoose.connection.db.dropDatabase();
}, { useMongoClient: true });
const Deal = require('../models/deal');

const deals = [
    {
        companyName: "TextMaster",
        companyLogoUrl: '/static/textmaster.jpeg',
        dealName: 'TextMaster Seed Bridge',
        categoryName: "Pre-Seed / Seed",
        description: 'A seed round extension for an additional 12 months runway, to enable TextMaster to grow their MRR from $40k to $80k, in preparation for Series A',
        investors: ['John Swift', 'Anna Klein', 'William Ball', 'Helen Shamrock'],
    },
    {
      companyName: "Mailjet",
      companyLogoUrl: '/static/textmaster.jpeg',
      dealName: 'Mailjet Series B',
      categoryName: "Series B",
      description: 'Having reached $15M in ARR, Mailjet are now raising a Series B to expand into the US market, and to open a NY office.',
      investors: ['Jake Kennedy', 'Amelia Hart', 'Bill Glass', 'Annette Case'],
  },
];

Deal.create(deals, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((deal) => {
      console.log(deal.dealName)
    });
    mongoose.connection.close();
  });