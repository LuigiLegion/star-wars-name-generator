import { maleFirstNames } from '../../data/sets/sorted/male/male-first-names';
import { femaleFirstNames } from '../../data/sets/sorted/female/female-first-names';
import { allLastNames } from '../../data/sets/sorted/all/all-last-names';
import { allFirstNames } from '../../data/sets/sorted/all/all-first-names';

import { getName } from '../../functions/generate';

// Initial State
const initialState = {
  firstNames: [],
};

// Actions
const GOT_FIRST_NAME = 'GOT_FIRST_NAME';

// Action Creators
export const gotFirstNameActionCreator = firstName => ({
  type: GOT_FIRST_NAME,
  firstName,
});

// Thunk Creators
export const getFirstNameThunkCreator = (firstName, gender) => {
  return dispatch => {
    try {
      // console.log('firstName in getFirstNameThunkCreator: ', firstName);
      // console.log('gender in getFirstNameThunkCreator: ', gender);

      let generatedFirstName;

      if (gender === 'Male') {
        generatedFirstName = getName(firstName, maleFirstNames);
      } else if (gender === 'Female') {
        generatedFirstName = getName(firstName, femaleFirstNames);
      } else {
        generatedFirstName = getName(firstName, allFirstNames);
      }

      // console.log(
      //   'generatedFirstName in getFirstNameThunkCreator: ',
      //   generatedFirstName
      // );

      dispatch(gotFirstNameActionCreator(generatedFirstName));
    } catch (error) {
      console.error(error);
    }
  };
};

// Reducer
const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FIRST_NAME:
      // console.log('action.firstName in GOT_FIRST_NAMES: ', action.firstName);

      return { ...state, firstNames: [...state.firstNames, action.firstName] };

    default:
      return state;
  }
};

export default namesReducer;
