/* eslint-disable no-unused-vars */

import { maleFirstNames } from '../data/sets/sorted/male/male-first-names';
import { femaleFirstNames } from '../data/sets/sorted/female/female-first-names';
import { allLastNames } from '../data/sets/sorted/all/all-last-names';
import { allFirstNames } from '../data/sets/sorted/all/all-first-names';

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

  if (optionalNames.length < 3 || !userName.length) {
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

export const getName = (userName, allCharNames) => {
  const userNameInitial = userName[0].toUpperCase();
  const charNames = allCharNames[userNameInitial];
  const optionalNames = getOptionalNames(userName, charNames);
  const randomIdx = generateRandomIdx(optionalNames.length);
  const randomName = optionalNames[randomIdx];
  return randomName;
};

// Male
// console.log(
//   `Your Star Wars name is: ${getName('John', maleFirstNames)} ${getName(
//     'Doe',
//     allLastNames
//   )}`
// );

// Female
// console.log(
//   `Your Star Wars name is: ${getName('Jane', femaleFirstNames)} ${getName(
//     'Doe',
//     allLastNames
//   )}`
// );

// Other
// console.log(
//   `Your Star Wars name is: ${getName('Jaden', allFirstNames)} ${getName(
//     'Doe',
//     allLastNames
//   )}`
// );
