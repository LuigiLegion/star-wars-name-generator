// Imports
import { generateDict, sortDict, printDict } from './sort';

// Initializations
const removeDuplicates = dict => {
  const cleanedDict = generateDict();

  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      const curLetterNames = dict[key];
      let curName;
      let nextName;

      for (let i = 0; i < curLetterNames.length; i++) {
        curName = curLetterNames[i];
        nextName = curLetterNames[i + 1];

        if (curName !== nextName) {
          cleanedDict[key].push(curName);
        }
      }
    }
  }

  return cleanedDict;
};

const mergeDicts = (dictOne, dictTwo) => {
  const mergedDict = generateDict();

  for (let key in mergedDict) {
    if (mergedDict.hasOwnProperty(key)) {
      mergedDict[key] = [...dictOne[key], ...dictTwo[key]];
    }
  }

  sortDict(mergedDict);

  const cleanedMergedDict = removeDuplicates(mergedDict);

  printDict(cleanedMergedDict);
};

// Exports
export { removeDuplicates, mergeDicts };

// Checks
// import { maleFirstNames } from '../data/sets/sorted/male/male-first-names';
// import { maleLastNames } from '../data/sets/sorted/male/male-last-names';
// import { femaleFirstNames } from '../data/sets/sorted/female/female-first-names';
// import { femaleLastNames } from '../data/sets/sorted/female/female-last-names';

// mergeDicts(maleFirstNames, femaleFirstNames);
// mergeDicts(maleLastNames, femaleLastNames);
