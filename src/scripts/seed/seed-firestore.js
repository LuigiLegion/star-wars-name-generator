const firebase = require('../../config/fbConfig');
require('firebase/firestore');
const firestore = firebase.firestore();

const datasets = require('../../data/sets/sorted');

const seedCollection = async (collectionName, dataset) => {
  for (let key in dataset) {
    if (dataset.hasOwnProperty(key)) {
      try {
        await firestore
          .collection(collectionName)
          .doc(key)
          .set({ names: dataset[key] });

        console.log({ collectionName });
        console.log({ key });
        console.log('Document added successfully!');
      } catch (error) {
        console.log({ collectionName });
        console.log({ key });
        console.error('Error adding document: ', error);
      }
    }
  }
};

datasets.forEach((curDataset, idx) => {
  setTimeout(() => {
    seedCollection(curDataset.collectionName, curDataset.dataset);
  }, 20000 * idx);
});
