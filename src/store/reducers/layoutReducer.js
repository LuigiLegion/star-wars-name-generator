// Imports
import { toast } from '../../utils';

// Initial State
const initialState = {
  isLoading: false,
};

// Action Types
const TOGGLED_PRELOADER = 'TOGGLED_PRELOADER';

// Action Creators
export const toggledPreloaderActionCreator = status => ({
  type: TOGGLED_PRELOADER,
  status,
});

// Thunk Creators
export const copyToClipboardThunkCreator = text => {
  return async _ => {
    try {
      await navigator.clipboard.writeText(text);
      toast('Name copied to clipboard', 'green');
    } catch (error) {
      console.error(error);
      toast('Error! Failed to copy name to clipboard', 'red');
    }
  };
};

// Reducer
const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLED_PRELOADER:
      return {
        isLoading: action.status,
      };

    default:
      return state;
  }
};

// Exports
export default layoutReducer;
