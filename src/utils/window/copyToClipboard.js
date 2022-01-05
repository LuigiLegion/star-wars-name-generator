// Imports
import { toast } from '../../utils';

// Initializations
const copyToClipboard = async text => {
  try {
    await window.navigator.clipboard.writeText(text);
    toast('Name copied to clipboard', 'green');
  } catch (error) {
    console.error(error);
    toast('Error! Failed to copy name to clipboard', 'red');
  }
};

// Exports
export default copyToClipboard;
