export const generateRandomIdx = arrLength => {
  const randomIdx = Math.floor(Math.random() * arrLength);
  return randomIdx;
};

export const getNameRating = (capUserName, capCharName) => {
  const userName = capUserName.toLowerCase();
  const charName = capCharName.toLowerCase();

  let nameRating = 0;
  let userNamePointer = 0;
  let charNamePointer = 0;
  let letterFoundPointer = 0;

  while (userNamePointer < userName.length) {
    const userNameLetter = userName[userNamePointer];
    const charNameLetter = charName[charNamePointer];

    if (userNameLetter === charNameLetter) {
      nameRating++;
      letterFoundPointer = charNamePointer;
      userNamePointer++;
      charNamePointer++;
    } else if (charNamePointer < charName.length) {
      charNamePointer++;
    } else {
      userNamePointer++;
      charNamePointer = letterFoundPointer;
    }
  }

  return nameRating;
};

export const getOptionalNames = (
  userName,
  charNames,
  optionalNames = []
  // counter = 1
) => {
  // console.log(`Call #${counter} optionalNames: ${optionalNames}`);

  if (!userName.length) {
    return optionalNames;
  }

  let highestRating = 0;

  for (let i = 0; i < charNames.length; i++) {
    const charName = charNames[i];
    if (charName !== userName) {
      const curCharNameRating = getNameRating(userName, charName);

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

  return optionalNames;
};

export const getName = (userName, charNames) => {
  const optionalNames = getOptionalNames(userName, charNames);
  const randomIdx = generateRandomIdx(optionalNames.length);
  const randomName = optionalNames[randomIdx];
  return randomName;
};
