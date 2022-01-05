// Initializations
const formatMatches = matches => JSON.stringify(Object.keys(matches).map(match => parseInt(match, 10) + 1));

const formatFavorites = favorites => favorites.map((favorite, idx) => ({
  ...favorite,
  id: idx + 1,
  gender: favorite.gender === 'all' ? 'nonbinary' : favorite.gender,
  matches: favorite.matches ? {
    first: formatMatches(favorite.matches.first),
    last: formatMatches(favorite.matches.last),
  } : null,
}));

// Exports
export default formatFavorites;
