// Initializations
const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const nameRating = (rawInputName, rawSwName) => {
  const inputName = rawInputName.toLowerCase();
  const swName = rawSwName.toLowerCase();

  let swNameRating = 0;
  let inputNamePointer = 0;
  let swNamePointer = 0;
  let letterFoundPointer = 0;

  while (inputNamePointer < inputName.length) {
    const curInputNameLetter = inputName[inputNamePointer];
    const curSwNameLetter = swName[swNamePointer];

    if (curInputNameLetter === curSwNameLetter) {
      swNameRating++;
      letterFoundPointer = swNamePointer;
      inputNamePointer++;
      swNamePointer++;
    } else if (swNamePointer < swName.length) {
      swNamePointer++;
    } else {
      inputNamePointer++;
      swNamePointer = letterFoundPointer;
    }
  }

  return swNameRating;
};

const optionalNames = (inputName, allSwNames, optionalSwNames = []) => {
  if (!inputName.length) {
    return optionalSwNames;
  }

  let highestSwNameRating = 0;

  allSwNames.forEach(curSwName => {
    if (curSwName !== inputName) {
      const curSwNameRating = nameRating(inputName, curSwName);

      if (curSwNameRating === highestSwNameRating) {
        optionalSwNames.push(curSwName);
      } else if (curSwNameRating > highestSwNameRating) {
        highestSwNameRating = curSwNameRating;
        optionalSwNames = [curSwName];
      }
    }
  });

  if (optionalSwNames.length < 5) {
    const shortenedInputName = inputName.slice(1);

    optionalSwNames = optionalNames(
      shortenedInputName,
      allSwNames,
      optionalSwNames
    );
  }

  return optionalSwNames;
};

const randomOptionalName = (inputName, allSwNames) =>
  randomElement(optionalNames(inputName, allSwNames));

// Exports
export default randomOptionalName;
