// Imports
import { Parser, transforms } from 'json2csv';

// Initializations
const jsonToCsv = (json, fields, paths) => {
    const parser = new Parser({
    fields,
    transforms: [transforms.unwind({ paths })],
  });

  return parser.parse(json);
};

// Exports
export default jsonToCsv;
