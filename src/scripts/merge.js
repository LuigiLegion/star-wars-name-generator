// Imports
import { generateDict, sortDict, printDict } from './sort';

import { maleFirstNames } from '../data/sets/sorted/male/male-first-names';
import { maleLastNames } from '../data/sets/sorted/male/male-last-names';
import { femaleFirstNames } from '../data/sets/sorted/female/female-first-names';
import { femaleLastNames } from '../data/sets/sorted/female/female-last-names';

// Initializations
const removeDuplicates = dict => {
  const cleanDict = generateDict();

  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      const curLetterNames = dict[key];

      for (let i = 0; i < curLetterNames.length; i++) {
        const curName = curLetterNames[i];
        const nextName = curLetterNames[i + 1];

        if (curName !== nextName) {
          cleanDict[key].push(curName);
        }
      }
    }
  }

  return cleanDict;
};

const mergeDicts = (dictOne, dictTwo) => {
  const mergedDict = generateDict();

  for (let key in mergedDict) {
    if (mergedDict.hasOwnProperty(key)) {
      mergedDict[key] = [...dictOne[key], ...dictTwo[key]];
    }
  }

  sortDict(mergedDict);

  return mergedDict;
};

// Checks
printDict(removeDuplicates(mergeDicts(maleFirstNames, femaleFirstNames)));
printDict(removeDuplicates(mergeDicts(maleLastNames, femaleLastNames)));
