// Imports
import { toastNotification } from '../../utils';

// Initial State
const initialState = {
  isLoading: false,
  copyError: false,
};

// Action Types
const TOGGLED_PRELOADER = 'TOGGLED_PRELOADER';
const COPIED_TO_CLIPBOARD = 'COPIED_TO_CLIPBOARD';

// Action Creators
export const toggledPreloaderActionCreator = status => ({
  type: TOGGLED_PRELOADER,
  status,
});

export const copiedToClipboardActionCreator = status => ({
  type: COPIED_TO_CLIPBOARD,
  status,
});

// Thunk Creators
export const copyToClipboardThunkCreator = text => {
  return async dispatch => {
    try {
      await navigator.clipboard.writeText(text);

      dispatch(copiedToClipboardActionCreator(false));
      toastNotification('Copied To Clipboard', 'green');
    } catch (error) {
      console.error(error);
      dispatch(copiedToClipboardActionCreator(true));
      toastNotification('Error! Failed To Copy To Clipboard', 'red');
    }
  };
};

// Reducer
const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLED_PRELOADER:
      return {
        ...state,
        isLoading: action.status,
      };

    case COPIED_TO_CLIPBOARD:
      return {
        ...state,
        copyError: action.status,
      };

    default:
      return state;
  }
};

// Exports
export default layoutReducer;
