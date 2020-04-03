import falseNegativeData from '../../../data/exploration/wrong-classifications/complementNB/false_negatives1.json';
import falsePositiveData from '../../../data/exploration/wrong-classifications/complementNB/false_positives1.json';

const getFalseData = () => {
  return {
    falseNegaties: Object.keys(falseNegativeData.actual_label).length,
    falsePositives: Object.keys(falsePositiveData.actual_label).length
  };

};

export {
  getFalseData,
};
