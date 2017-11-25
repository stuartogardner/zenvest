const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zenvest', function(){
  mongoose.connection.db.dropDatabase();
}, { useMongoClient: true });
const Deal = require('../models/deal');
const Investor = require('../models/investor')

const deals = [
    {
        companyName: "TextMaster",
        companyLogoUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAmyAAAAJDRiMWYzNjNmLTI2OGMtNDc2OS05MDgwLWUxMzgxN2U2MTg0OQ.png',
        dealName: 'TextMaster Seed Extension',
        categoryName: "Pre-Seed / Seed",
        description: 'A seed round extension for an additional 12 months runway, to enable TextMaster to grow their MRR from $40k to $80k, in preparation for Series A',
        investors: ['John Swift', 'Anna Klein', 'William Ball', 'Helen Shamrock'],
    },
    {
      companyName: "Mailjet",
      companyLogoUrl: 'https://www.manycontacts.com/assets/img/synchronization/mailjet.png',
      dealName: 'Mailjet Series B',
      categoryName: "Series B",
      description: 'Having reached $15M in ARR, Mailjet are now raising a Series B to expand into the US market, and to open a NY office.',
      investors: ['Jake Kennedy', 'Amelia Hart', 'Bill Glass', 'Annette Case'],
    },
    {
      companyName: "Front",
      companyLogoUrl: 'https://financesonline.com/uploads/2017/08/fa.jpg',
      dealName: 'Front Bridge to Series C',
      categoryName: "Series B",
      description: 'Front now have 150k customers. They need to reach 200k to raise their Series C in 12 months time, and this bridge round will help them to do that.',
      investors: ['James Gardner', 'Angie Elle', 'Laure Crawley', 'Harriet Dickinson'],
    },
    {
      companyName: "TextMaster",
      companyLogoUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAmyAAAAJDRiMWYzNjNmLTI2OGMtNDc2OS05MDgwLWUxMzgxN2U2MTg0OQ.png',
      dealName: 'TextMaster Seed Extension',
      categoryName: "Pre-Seed / Seed",
      description: 'A seed round extension for an additional 12 months runway, to enable TextMaster to grow their MRR from $40k to $80k, in preparation for Series A',
      investors: ['John Swift', 'Anna Klein', 'William Ball', 'Helen Shamrock'],
  },
  {
    companyName: "Mailjet",
    companyLogoUrl: 'https://www.manycontacts.com/assets/img/synchronization/mailjet.png',
    dealName: 'Mailjet Series B',
    categoryName: "Series B",
    description: 'Having reached $15M in ARR, Mailjet are now raising a Series B to expand into the US market, and to open a NY office.',
    investors: ['Jake Kennedy', 'Amelia Hart', 'Bill Glass', 'Annette Case'],
  },
  {
    companyName: "Front",
    companyLogoUrl: 'https://financesonline.com/uploads/2017/08/fa.jpg',
    dealName: 'Front Bridge to Series C',
    categoryName: "Series B",
    description: 'Front now have 150k customers. They need to reach 200k to raise their Series C in 12 months time, and this bridge round will help them to do that.',
    investors: ['James Gardner', 'Angie Elle', 'Laure Crawley', 'Harriet Dickinson'],
  },
  {
    companyName: "TextMaster",
    companyLogoUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAmyAAAAJDRiMWYzNjNmLTI2OGMtNDc2OS05MDgwLWUxMzgxN2U2MTg0OQ.png',
    dealName: 'TextMaster Seed Extension',
    categoryName: "Pre-Seed / Seed",
    description: 'A seed round extension for an additional 12 months runway, to enable TextMaster to grow their MRR from $40k to $80k, in preparation for Series A',
    investors: ['John Swift', 'Anna Klein', 'William Ball', 'Helen Shamrock'],
},
{
  companyName: "Mailjet",
  companyLogoUrl: 'https://www.manycontacts.com/assets/img/synchronization/mailjet.png',
  dealName: 'Mailjet Series B',
  categoryName: "Series B",
  description: 'Having reached $15M in ARR, Mailjet are now raising a Series B to expand into the US market, and to open a NY office.',
  investors: ['Jake Kennedy', 'Amelia Hart', 'Bill Glass', 'Annette Case'],
},
{
  companyName: "Front",
  companyLogoUrl: 'https://financesonline.com/uploads/2017/08/fa.jpg',
  dealName: 'Front Bridge to Series C',
  categoryName: "Series B",
  description: 'Front now have 150k customers. They need to reach 200k to raise their Series C in 12 months time, and this bridge round will help them to do that.',
  investors: ['James Gardner', 'Angie Elle', 'Laure Crawley', 'Harriet Dickinson'],
},
];

  const investors = [
    {
      avatarUrl: '',
      firstName: 'John',
      lastName: 'Swift',
    },
    {
      avatarUrl: '',
      firstName: 'Anna',
      lastName: 'Klein',
    },
    {
      avatarUrl: '',
      firstName: 'William',
      lastName: 'Ball',
    },
    {
      avatarUrl: '',
      firstName: 'Chloe',
      lastName: 'Glass',
    },
    ];

let addSeed = function(){
  Investor.create(investors, (err, docs) => {
      if (err) {
        throw err;
      }
    
      docs.forEach((investor) => {
      });
      mongoose.connection.close();
    });

    Deal.create(deals, (err, docs) => {
      if (err) {
        throw err;
      }
    
      docs.forEach((deal) => {
      });
      mongoose.connection.close();
    });
}

addSeed();