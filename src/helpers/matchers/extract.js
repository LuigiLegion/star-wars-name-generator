/* eslint-disable complexity */

// Initializations
export const extractFullNames = articles => {
  const fullNames = articles.items.reduce((acc, curArticle) => {
    const curArticleTitle = curArticle.title;

    if (
      !curArticleTitle.includes("'s ") &&
      !curArticleTitle.includes("s' ") &&
      !curArticleTitle.includes('0') &&
      !curArticleTitle.includes('1') &&
      !curArticleTitle.includes('2') &&
      !curArticleTitle.includes('3') &&
      !curArticleTitle.includes('4') &&
      !curArticleTitle.includes('5') &&
      !curArticleTitle.includes('6') &&
      !curArticleTitle.includes('7') &&
      !curArticleTitle.includes('8') &&
      !curArticleTitle.includes('9')
    ) {
      const curArticleTitleArr = curArticleTitle.split(' ');

      if (
        curArticleTitleArr[0] !== 'The' &&
        curArticleTitleArr[0] !== 'Unidentified'
      ) {
        acc.push(curArticle.title);
      }
    }

    return acc;
  }, []);

  console.log(JSON.stringify(fullNames));
};

// Checks
// import { malesOneOfSix } from '../data/sets/raw/males/males-1-of-6';
// import { malesTwoOfSix } from '../data/sets/raw/males/males-2-of-6';
// import { malesThreeOfSix } from '../data/sets/raw/males/males-3-of-6';
// import { malesFourOfSix } from '../data/sets/raw/males/males-4-of-6';
// import { malesFiveOfSix } from '../data/sets/raw/males/males-5-of-6';
// import { malesSixOfSix } from '../data/sets/raw/males/males-6-of-6';
// import { femalesOneOfTwo } from '../data/sets/raw/females/females-1-of-2';
// import { femalesTwoOfTwo } from '../data/sets/raw/females/females-2-of-2';

// console.log(extractFullNames(malesOneOfSix));
// console.log(extractFullNames(malesTwoOfSix));
// console.log(extractFullNames(malesThreeOfSix));
// console.log(extractFullNames(malesFourOfSix));
// console.log(extractFullNames(malesFiveOfSix));
// console.log(extractFullNames(malesSixOfSix));
// console.log(extractFullNames(femalesOneOfTwo));
// console.log(extractFullNames(femalesTwoOfTwo));
