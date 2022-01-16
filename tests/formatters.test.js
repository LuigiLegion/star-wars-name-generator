// Imports
const formattedFavorites = require('../src/utils/formatters/favorites');

// Tests
describe('formatters', () => {
  describe('formattedFavorites', () => {
    test('formats a favorites array into a json2csv-parsable array', () => {
      // Arrange
      const favorites = require('./data/favorites.json');
      const expected = require('./data/formatted-favorites.json');
      // Act
      const result = formattedFavorites(favorites);
      // Assert
      expect(result).toEqual(expected);
    });
  });
});
