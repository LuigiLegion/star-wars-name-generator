// Initializations
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomInitial = () => String.fromCharCode(randomInteger(65, 91));

const randomIndex = length => Math.floor(Math.random() * length);

const randomElement = array => array[randomIndex(array.length)];

const arrayOfEmptyArrays = length => [...Array(length)].map(_ => []);

const isValidName = name => name[0].toLowerCase() !== name[0].toUpperCase();

const nameScore = (sourceNameLength, targetNameRating) => (targetNameRating / sourceNameLength) * 100;

const fullNameScore = (firstNameScore, lastNameScore) => (firstNameScore * 0.5) + (lastNameScore * 0.5);

const nameRating = (sourceName, targetName) => {
  let targetNameRating = 0;
  let sourceNameIndex = 0;
  let targetNameIndex = 0;
  let letterFoundIndex = 0;

  while (sourceNameIndex < sourceName.length) {
    const sourceNameLetter = sourceName[sourceNameIndex];
    const targetNameLetter = targetName[targetNameIndex];

    if (targetNameLetter === sourceNameLetter) {
      targetNameRating++;
      sourceNameIndex++;
      targetNameIndex++;
      letterFoundIndex = targetNameIndex;
    } else if (targetNameIndex < targetName.length) {
      targetNameIndex++;
    } else {
      sourceNameIndex++;
      targetNameIndex = letterFoundIndex;
    }
  }

  return targetNameRating;
};

const matchingLetterIndeces = (sourceName, targetName) => {
  const matches = {};
  let sourceNameIndex = 0;
  let targetNameIndex = 0;
  let letterFoundIndex = 0;

  while (sourceNameIndex < sourceName.length) {
    const sourceNameLetter = sourceName[sourceNameIndex];
    const targetNameLetter = targetName[targetNameIndex];

    if (targetNameLetter === sourceNameLetter) {
      matches[targetNameIndex] = true;
      sourceNameIndex++;
      targetNameIndex++;
      letterFoundIndex = targetNameIndex;
    } else if (targetNameIndex < targetName.length) {
      targetNameIndex++;
    } else {
      sourceNameIndex++;
      targetNameIndex = letterFoundIndex;
    }
  }

  return matches;
};

const name = (sourceName, targetName) => {
  const matches = matchingLetterIndeces(sourceName.toLowerCase(), targetName.toLowerCase());
  const targetNameRating = Object.keys(matches).length;

  return {
    name: targetName,
    score: nameScore(sourceName.length, targetNameRating),
    matches,
  }
};

const nameListsByRating = (sourceName, targetNames) => {
  const targetNameListsByRating = arrayOfEmptyArrays(sourceName.length + 1);

  for (let i = 0; i < targetNames.length; i++) {
    const targetName = targetNames[i];
    const targetNameRating = nameRating(sourceName, targetName.toLowerCase());
    targetNameListsByRating[targetNameRating].push(targetName);
  }

  return targetNameListsByRating.filter(nameList => nameList.length);
};

const randomNameByRandomRating = (sourceName, targetNames) =>
  name(sourceName, randomElement(randomElement(nameListsByRating(sourceName.toLowerCase(), targetNames))));

// Exports
export {
  isValidName,
  randomNameByRandomRating,
  fullNameScore,
  randomInitial,
  randomElement,
};
