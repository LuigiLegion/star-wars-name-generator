// Initializations
const formatMatches = matches => JSON.stringify(Object.keys(matches).map(match => parseInt(match, 10) + 1));

const formatFavorites = favorites => favorites.map((favorite, idx) => ({
  id: idx + 1,
  first: favorite.first,
  last: favorite.last,
  gender: favorite.gender === 'all' ? 'nonbinary' : favorite.gender,
  input: favorite.input ? {
    first: favorite.first,
    last: favorite.last,
  } : null,
  scores: favorite.scores ? {
    first: favorite.scores.first.toFixed(2),
    last: favorite.scores.last.toFixed(2),
    full: favorite.scores.full.toFixed(2),
  } : null,
  matches: favorite.matches ? {
    first: formatMatches(favorite.matches.first),
    last: formatMatches(favorite.matches.last),
  } : null,
}));

// Exports
export default formatFavorites;
