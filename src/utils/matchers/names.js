// Initializations
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomInitial = () => String.fromCharCode(randomInteger(65, 91));

const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const arrayOfEmptyArrays = length => [...Array(length)].map(_ => []);

const arrayOfNonEmptyArrays = arrayOfArrays => arrayOfArrays.filter(array => array.length);

const nameScore = (inputNameLength, generatedNameRating) => (generatedNameRating / inputNameLength) * 100;

const fullNameScore = (firstNameScore, lastNameScore) => (firstNameScore * 0.5) + (lastNameScore * 0.5);

const nameRating = (inputName, starWarsName) => {
  let starWarsNameRating = 0;
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

const matchingLetterIndeces = (inputName, starWarsName) => {
  const indeces = [];
  let inputNamePointer = 0;
  let starWarsNamePointer = 0;
  let letterFoundPointer = 0;

  while (inputNamePointer < inputName.length) {
    const inputNameLetter = inputName[inputNamePointer];
    const starWarsNameLetter = starWarsName[starWarsNamePointer];

    if (starWarsNameLetter === inputNameLetter) {
      indeces.push(starWarsNamePointer);
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

  return indeces;
};

const nameObject = (inputName, starWarsName) => {
  const matches = matchingLetterIndeces(inputName.toLowerCase(), starWarsName.toLowerCase());

  return {
    name: starWarsName,
    score: nameScore(inputName.length, matches.length),
    matches,
  }
};

const nameListsByRating = (inputName, starWarsNames) => {
  const starWarsNameListsByRating = arrayOfEmptyArrays(inputName.length + 1);

  for (let i = 0; i < starWarsNames.length; i++) {
    const starWarsName = starWarsNames[i];
    const starWarsNameRating = nameRating(inputName, starWarsName.toLowerCase());
    starWarsNameListsByRating[starWarsNameRating].push(starWarsName);
  }

  return arrayOfNonEmptyArrays(starWarsNameListsByRating);
};

const randomNameByRandomRating = (inputName, starWarsNames) =>
  nameObject(inputName, randomElement(randomElement(nameListsByRating(inputName.toLowerCase(), starWarsNames))));

// Exports
export { randomNameByRandomRating, fullNameScore, randomInitial, randomElement };
