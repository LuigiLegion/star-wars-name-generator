/* eslint-disable complexity */
/* eslint-disable no-unused-vars */

import { maleFullNames } from '../data/sets/sorted/male/male-full-names';
import { femaleFullNames } from '../data/sets/sorted/female/female-full-names';

export const generateDict = () => ({
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: [],
});

export const sortDict = dict => {
  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      dict[key].sort();
    }
  }
};

export const printDict = dict => {
  const dictKeys = Object.keys(dict);

  for (let i = 0; i < dictKeys.length; i++) {
    const curKey = dictKeys[i];

    setTimeout(() => {
      console.log({ curKey });
      console.log(JSON.stringify(dict[curKey]));
    }, 20000 * i);
  }
};

export const sortNames = fullNames => {
  const firstNamesDict = generateDict();
  const lastNamesDict = generateDict();

  for (let i = 0; i < fullNames.length; i++) {
    let curFullNameStr = fullNames[i];

    let curFullNameStrCleaned;
    if (curFullNameStr.includes('/')) {
      curFullNameStrCleaned = curFullNameStr.split('/');
      curFullNameStr = curFullNameStrCleaned[0];
    }

    if (curFullNameStr.includes(' (')) {
      curFullNameStrCleaned = curFullNameStr.split(' (');
      curFullNameStr = curFullNameStrCleaned[0];
    }

    const curFullNameArr = curFullNameStr.split(' ');

    const curFirstName = curFullNameArr[0];
    const curFirstNameInitial = curFirstName[0];

    if (curFirstName) {
      if (firstNamesDict[curFirstNameInitial]) {
        if (curFirstName !== 'Darth') {
          if (!firstNamesDict[curFirstNameInitial].includes(curFirstName)) {
            firstNamesDict[curFirstNameInitial].push(curFirstName);
          }
        }
      }
    }

    const curLastName = curFullNameArr.slice(1).join(' ');
    const curLastNameInitial = curLastName[0];

    if (curLastName) {
      if (lastNamesDict[curLastNameInitial]) {
        if (!lastNamesDict[curLastNameInitial].includes(curLastName)) {
          lastNamesDict[curLastNameInitial].push(curLastName);
        }
      }
    }
  }

  sortDict(firstNamesDict);
  sortDict(lastNamesDict);

  printDict(firstNamesDict);
  printDict(lastNamesDict);
};

// sortNames(maleFullNames);
// sortNames(femaleFullNames);
