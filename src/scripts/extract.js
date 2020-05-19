/* eslint-disable complexity */

// Imports
import { malesOneOfSix } from '../data/sets/raw/males/males-1-of-6';
import { malesTwoOfSix } from '../data/sets/raw/males/males-2-of-6';
import { malesThreeOfSix } from '../data/sets/raw/males/males-3-of-6';
import { malesFourOfSix } from '../data/sets/raw/males/males-4-of-6';
import { malesFiveOfSix } from '../data/sets/raw/males/males-5-of-6';
import { malesSixOfSix } from '../data/sets/raw/males/males-6-of-6';
import { femalesOneOfTwo } from '../data/sets/raw/females/females-1-of-2';
import { femalesTwoOfTwo } from '../data/sets/raw/females/females-2-of-2';

// Initializations
const extractFullNames = articles =>
  articles.items.reduce((acc, curArticle) => {
    if (
      !curArticle.title.includes("'s ") &&
      !curArticle.title.includes("s' ") &&
      !curArticle.title.includes('0') &&
      !curArticle.title.includes('1') &&
      !curArticle.title.includes('2') &&
      !curArticle.title.includes('3') &&
      !curArticle.title.includes('4') &&
      !curArticle.title.includes('5') &&
      !curArticle.title.includes('6') &&
      !curArticle.title.includes('7') &&
      !curArticle.title.includes('8') &&
      !curArticle.title.includes('9')
    ) {
      const curArticleTitleWords = curArticle.title.split(' ');

      if (
        curArticleTitleWords[0] !== 'The' &&
        curArticleTitleWords[0] !== 'Unidentified'
      ) {
        acc.push(curArticle.title);
      }
    }

    return acc;
  }, []);

const printFullNames = fullNames => console.log(JSON.stringify(fullNames));

// Checks
printFullNames(extractFullNames(malesOneOfSix));
printFullNames(extractFullNames(malesTwoOfSix));
printFullNames(extractFullNames(malesThreeOfSix));
printFullNames(extractFullNames(malesFourOfSix));
printFullNames(extractFullNames(malesFiveOfSix));
printFullNames(extractFullNames(malesSixOfSix));
printFullNames(extractFullNames(femalesOneOfTwo));
printFullNames(extractFullNames(femalesTwoOfTwo));
