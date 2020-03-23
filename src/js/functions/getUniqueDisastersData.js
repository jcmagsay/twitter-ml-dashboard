import data from '../../../data/train';
import { DISASTER_TYPE } from '../../enums/disasterType.enum';

const getUniqueDisastersData = () => {
  const disasterTypes = data.disaster_type;

  if (disasterTypes) {
    const uniqueDisasters = new Set();

    Object.values(disasterTypes).forEach((value) => {
      uniqueDisasters.add(value);
    });

    return {
      uniqueDisasters,
    };
  }
};

export {
  getUniqueDisastersData,
};
