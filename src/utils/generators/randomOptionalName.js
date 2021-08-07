// Initializations
const minOptionalNamesCount = 5;

const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const nameRating = (inputName, starWarsName) => {
  let starWarsNameRating = 0;
  let inputNamePointer = 0;
  let starWarsNamePointer = 0;
  let letterFoundPointer = 0;

  while (inputNamePointer < inputName.length) {
    const inputNameLetter = inputName[inputNamePointer];
    const starWarsNameLetter = starWarsName[starWarsNamePointer];

    if (inputNameLetter === starWarsNameLetter) {
      starWarsNameRating++;
      letterFoundPointer = starWarsNamePointer;
      inputNamePointer++;
      starWarsNamePointer++;
    } else if (starWarsNamePointer < starWarsName.length) {
      starWarsNamePointer++;
    } else {
      inputNamePointer++;
      starWarsNamePointer = letterFoundPointer;
    }
  }

  return starWarsNameRating;
};

const optionalNames = (rawInputName, allStarWarsNames, optionalStarWarsNames = []) => {
  if (!rawInputName.length) {
    return optionalStarWarsNames;
  }

  const inputName = rawInputName.toLowerCase();
  let maxStarWarsNameRating = 0;

  allStarWarsNames.forEach(starWarsName => {
    if (starWarsName !== inputName) {
      const starWarsNameRating = nameRating(inputName, starWarsName.toLowerCase());

      if (starWarsNameRating === maxStarWarsNameRating) {
        optionalStarWarsNames.push(starWarsName);
      } else if (starWarsNameRating > maxStarWarsNameRating) {
        maxStarWarsNameRating = starWarsNameRating;
        optionalStarWarsNames = [starWarsName];
      }
    }
  });

  if (optionalStarWarsNames.length < minOptionalNamesCount) {
    optionalStarWarsNames = optionalNames(
      inputName.slice(1),
      allStarWarsNames,
      optionalStarWarsNames
    );
  }

  return optionalStarWarsNames;
};

const randomOptionalName = (inputName, allStarWarsNames) =>
  randomElement(optionalNames(inputName, allStarWarsNames));

// Exports
export default randomOptionalName;
