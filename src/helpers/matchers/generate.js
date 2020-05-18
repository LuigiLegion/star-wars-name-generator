// Initializations
const randomIndex = length => Math.floor(Math.random() * length);

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

const getOptionalNames = (
  userName,
  charNames,
  optionalNames = []
  // counter = 1
) => {
  // console.log(`Invocation #${counter} optionalNames: ${optionalNames}`);

  if (!userName.length) {
    return optionalNames;
  }

  let highestRating = 0;

  for (let i = 0; i < charNames.length; i++) {
    const charName = charNames[i];
    if (charName !== userName) {
      const curCharNameRating = nameRating(userName, charName);

      if (curCharNameRating === highestRating) {
        optionalNames.push(charName);
      } else if (curCharNameRating > highestRating) {
        highestRating = curCharNameRating;
        optionalNames = [charName];
      }
    }
  }

  if (optionalNames.length < 5) {
    const shortenedUserName = userName.slice(1);

    optionalNames = getOptionalNames(
      shortenedUserName,
      charNames,
      optionalNames
      // ++counter
    );
  }

  // console.log('Final optionalNames: ', optionalNames);

  return optionalNames;
};

const getName = (userName, charNames) => {
  const optionalNames = getOptionalNames(userName, charNames);
  const randomIdx = randomIndex(optionalNames.length);
  const randomName = optionalNames[randomIdx];
  return randomName;
};

// Exports
export default getName;
