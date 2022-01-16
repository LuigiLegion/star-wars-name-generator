// Imports
const { Parser, transforms: { unwind } } = require('json2csv');

// Initializations
const jsonArrayToCsvString = (jsonArray, fields, paths) => {
  const transforms = [unwind({ paths })];
  const parser = new Parser({ fields, transforms });
  const csvString = parser.parse(jsonArray);

  return csvString;
};

// Exports
module.exports = jsonArrayToCsvString;
