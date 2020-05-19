// Imports
const { allFirstNames } = require('./all/all-first-names.json');
const { allLastNames } = require('./all/all-last-names.json');
const { maleFirstNames } = require('./male/male-first-names.json');
const { maleLastNames } = require('./male/male-last-names.json');
const { femaleFirstNames } = require('./female/female-first-names.json');
const { femaleLastNames } = require('./female/female-last-names.json');

// Initializations
const datasets = [
  {
    collectionName: 'allFirstNames',
    dataset: allFirstNames,
  },
  {
    collectionName: 'allLastNames',
    dataset: allLastNames,
  },
  {
    collectionName: 'maleFirstNames',
    dataset: maleFirstNames,
  },
  {
    collectionName: 'maleLastNames',
    dataset: maleLastNames,
  },
  {
    collectionName: 'femaleFirstNames',
    dataset: femaleFirstNames,
  },
  {
    collectionName: 'femaleLastNames',
    dataset: femaleLastNames,
  },
];

// Exports
module.exports = datasets;
