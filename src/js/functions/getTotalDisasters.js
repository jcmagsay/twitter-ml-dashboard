import data from '../../../data/train';
import { DISASTER_TYPE } from '../../enums/disasterType.enum';

const getTotalDisasters = () => {
  const disasterTypes = data.disaster_type;

  if (disasterTypes) {
    const disasterValues = Object.values(disasterTypes);

    let totalFire = 0;
    let totalFlood = 0;
    let totalHurricane = 0;
    let totalTornado = 0;

    disasterValues.forEach((value) => {
      switch (value) {
        case DISASTER_TYPE.FIRE:
          totalFire++;
          break;
        case DISASTER_TYPE.FLOOD:
          totalFlood++;
          break;
        case DISASTER_TYPE.HURRICANE:
          totalHurricane++;
          break;
        case DISASTER_TYPE.TORNADO:
          totalTornado++;
          break;
      }
    });

    return {
      totalDisasters: disasterValues.length,
      totalFire,
      totalFlood,
      totalHurricane,
      totalTornado,
    };
  }
};

export {
  getTotalDisasters,
};
