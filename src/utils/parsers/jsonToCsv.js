// Imports
const { Parser, transforms: { unwind } } = require('json2csv');

// Initializations
const jsonToCsv = (json, fields, paths) => {
  const transforms = [unwind({ paths })];
  const parser = new Parser({ fields, transforms });

  return parser.parse(json);
};

// Exports
export default jsonToCsv;
