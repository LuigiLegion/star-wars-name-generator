/* eslint-disable complexity */

// Imports
import { maleFullNames } from '../data/sets/sorted/male/male-full-names';
import { femaleFullNames } from '../data/sets/sorted/female/female-full-names';

// Initializations
const generateDict = () => ({
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

const sortDict = dict =>
  Object.keys(dict).forEach(curKey => dict[curKey].sort());

const printDict = dict =>
  Object.keys(dict).forEach((curKey, idx) => {
    setTimeout(() => {
      console.log({ curKey });
      console.log(JSON.stringify(dict[curKey]));
    }, 20000 * idx);
  });

const printDicts = dicts => dicts.forEach(curDict => printDict(curDict));

const sortNames = fullNames => {
  const firstNamesDict = generateDict();
  const lastNamesDict = generateDict();

  fullNames.forEach(curFullName => {
    let cleanCurFullName;

    if (curFullName.includes('/')) {
      cleanCurFullName = curFullName.split('/');
      curFullName = cleanCurFullName[0];
    }

    if (curFullName.includes(' (')) {
      cleanCurFullName = curFullName.split(' (');
      curFullName = cleanCurFullName[0];
    }

    const curFullNameWords = curFullName.split(' ');

    const curFirstName = curFullNameWords[0];
    const curFirstNameInitial = curFirstName[0];

    if (
      curFirstName &&
      curFirstName !== 'Darth' &&
      firstNamesDict[curFirstNameInitial] &&
      !firstNamesDict[curFirstNameInitial].includes(curFirstName)
    ) {
      firstNamesDict[curFirstNameInitial].push(curFirstName);
    }

    const curLastName = curFullNameWords.slice(1).join(' ');
    const curLastNameInitial = curLastName[0];

    if (
      curLastName &&
      lastNamesDict[curLastNameInitial] &&
      !lastNamesDict[curLastNameInitial].includes(curLastName)
    ) {
      lastNamesDict[curLastNameInitial].push(curLastName);
    }
  });

  sortDict(firstNamesDict);
  sortDict(lastNamesDict);

  return [firstNamesDict, lastNamesDict];
};

// Checks
printDicts(sortNames(maleFullNames));
printDicts(sortNames(femaleFullNames));

// Exports
export { generateDict, sortDict, printDict };
