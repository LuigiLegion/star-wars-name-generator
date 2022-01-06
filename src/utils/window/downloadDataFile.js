// Imports
import moment from 'moment';

import { toast } from '..';

// Initializations
const downloadDataFile = (dataStr, type, fileNamePrefix, fileNameExtension) => {
  try {
    const blob = new Blob([dataStr], { type });
    const blobUrl = window.URL.createObjectURL(blob);
    const fileName = `${fileNamePrefix}_${moment().format('MM_DD_YYYY_HH_mm_ss')}.${fileNameExtension}`;

    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', blobUrl);
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(blobUrl);
    toast('File downloaded', 'green');
  } catch (error) {
    console.error(error);
    toast('Error! Failed to download file', 'red');
  }
};

// Exports
export default downloadDataFile;
