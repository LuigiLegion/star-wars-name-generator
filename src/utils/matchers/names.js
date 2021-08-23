// Initializations
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomInitial = () => String.fromCharCode(randomInteger(65, 91));

const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const nameScore = (inputName, nameObject) => (nameObject.rating / inputName.length) * 100;

const fullNameScore = (firstNameScore, lastNameScore) => (firstNameScore * 0.5) + (lastNameScore * 0.5);

const arrayOfEmptyArrays = length => [...Array(length)].map(_ => []);

const arrayOfNonEmptyArrays = arrayOfArrays => arrayOfArrays.filter(array => array.length);

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

const nameObject = (name, rating) => ({
  name,
  rating,
});

const nameListsByRating = (inputName, starWarsNames) => {
  const starWarsNameListsByRating = arrayOfEmptyArrays(inputName.length + 1);

  for (let i = 0; i < starWarsNames.length; i++) {
    const starWarsName = starWarsNames[i];
    const starWarsNameRating = nameRating(inputName, starWarsName.toLowerCase());
    starWarsNameListsByRating[starWarsNameRating].push(nameObject(starWarsName, starWarsNameRating));
  }

  return arrayOfNonEmptyArrays(starWarsNameListsByRating);
};

const randomNameByRandomRating = (inputName, starWarsNames) =>
  randomElement(randomElement(nameListsByRating(inputName.toLowerCase(), starWarsNames)));

// Exports
export { randomNameByRandomRating, nameScore, fullNameScore, randomInitial, randomElement };
