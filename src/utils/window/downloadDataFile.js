// Imports
import moment from 'moment';

import { toast } from '..';

// Initializations
const downloadElement = (blobUrl, fileName) => {
  const a = document.createElement('a');

  a.setAttribute('href', blobUrl);
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener noreferrer');
  a.setAttribute('download', fileName);
  a.setAttribute('hidden', '');

  return a;
};

const clickDownloadElement = a => {
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const downloadDataFile = (dataStr, dataType, fileNamePrefix, fileNameExtension) => {
  try {
    const blob = new Blob([dataStr], { type: dataType });
    const blobUrl = window.URL.createObjectURL(blob);
    const fileName = `${fileNamePrefix}_${moment().format('MM_DD_YYYY_HH_mm_ss')}.${fileNameExtension}`;

    clickDownloadElement(downloadElement(blobUrl, fileName));

    window.URL.revokeObjectURL(blobUrl);
    toast('File downloaded', 'green');
  } catch (error) {
    console.error(error);
    toast('Error! Failed to download file', 'red');
  }
};

// Exports
export default downloadDataFile;
