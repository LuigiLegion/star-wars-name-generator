// Initializations
const minOptionalNamesCount = 5;

const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomInitial = () => String.fromCharCode(randomInteger(65, 91));

const nameObject = (name, rating) => ({
  name,
  rating,
});

const nameScore = (inputNameLength, starWarsNameRating) => (starWarsNameRating / inputNameLength) * 100;

const fullNameScore = (firstNameScore, lastNameScore) => (firstNameScore * 0.5) + (lastNameScore * 0.5);

const nameRating = (inputName, starWarsName) => {
  let starWarsNameRating = 1;
  let inputNamePointer = 0;
  let starWarsNamePointer = 0;
  let letterFoundPointer = 0;

  while (inputNamePointer < inputName.length) {
    const inputNameLetter = inputName[inputNamePointer];
    const starWarsNameLetter = starWarsName[starWarsNamePointer];

    if (starWarsNameLetter === inputNameLetter) {
      starWarsNameRating++;
      inputNamePointer++;
      starWarsNamePointer++;
      letterFoundPointer = starWarsNamePointer;
    } else if (starWarsNamePointer < starWarsName.length) {
      starWarsNamePointer++;
    } else {
      inputNamePointer++;
      starWarsNamePointer = letterFoundPointer;
    }
  }

  return starWarsNameRating;
};

const optionalNames = (inputName, allStarWarsNames, curatedStarWarsNames = [], selectedStarWarsNames = {}) => {
  if (!inputName.length) {
    return curatedStarWarsNames;
  }

  let optionalStarWarsNames = []
  let maxStarWarsNameRating = 0;

  allStarWarsNames.forEach(starWarsName => {
    if (starWarsName !== inputName && !selectedStarWarsNames[starWarsName]) {
      const starWarsNameRating = nameRating(inputName, starWarsName.slice(1).toLowerCase());

      if (starWarsNameRating === maxStarWarsNameRating) {
        optionalStarWarsNames.push(nameObject(starWarsName, starWarsNameRating));
        selectedStarWarsNames[starWarsName] = starWarsNameRating;
      } else if (starWarsNameRating > maxStarWarsNameRating) {
        maxStarWarsNameRating = starWarsNameRating;
        optionalStarWarsNames = [nameObject(starWarsName, starWarsNameRating)];
        selectedStarWarsNames[starWarsName] = starWarsNameRating;
      }
    }
  });

  if (curatedStarWarsNames.length < minOptionalNamesCount) {
    curatedStarWarsNames = optionalNames(
      inputName.slice(1),
      allStarWarsNames,
      curatedStarWarsNames.concat(optionalStarWarsNames),
      selectedStarWarsNames
    );
  }

  return curatedStarWarsNames;
};

const randomOptionalName = (inputName, allStarWarsNames) =>
  randomElement(optionalNames(inputName.slice(1).toLowerCase(), allStarWarsNames));

// Exports
export { randomOptionalName, nameScore, fullNameScore, randomInitial, randomElement };
