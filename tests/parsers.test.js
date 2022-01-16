// Imports
const jsonArrayToCsvString = require('../src/utils/parsers/jsonArrayToCsvString');

// Tests
describe('parsers', () => {
  describe('jsonArrayToCsvString', () => {
    test('parses a JSON array into a CSV string', () => {
      // Arrange
      const jsonArray = require('./data/formatted-favorites.json');
      const fields = ['id', 'first', 'last', 'gender', 'input.first', 'input.last', 'scores.first', 'scores.last', 'scores.full', 'matches.first', 'matches.last'];
      const paths = ['input', 'input.first', 'input.last', 'scores', 'scores.first', 'scores.last', 'scores.full', 'matches', 'matches.first', 'matches.last'];
      const expected = [
        '"id","first","last","gender","input.first","input.last","scores.first","scores.last","scores.full","matches.first","matches.last"',
        '1,"Trall","Lightbringer","male","Tal","Luigi","100.00","80.00","90.00","[1,3,4]","[1,2,3,8]"'
      ].join(process.platform === 'win32' ? '\r\n' : '\n');
      // Act
      const result = jsonArrayToCsvString(jsonArray, fields, paths);
      // Assert
      expect(result).toBe(expected);
    });
  });
});
