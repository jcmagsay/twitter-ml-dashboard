import React, { Fragment } from 'react';
import { getDisastersData } from '../../functions/getDisastersData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import { getTotalDisasters } from '../../functions/getTotalDisasters';
import Radial from '../../molecules/radial/radial';
import Icon from '../../atoms/icon/icon';
import IconTypes from '../../atoms/icon/iconTypes';

//styles
import './home.scss';

const getTotalDisastersWidget = () => {
  const totalDisasters = getDisastersData();
  const roundedPercent = Number(totalDisasters.disasters / totalDisasters.tweets * 100).toFixed(1);
  const disastersText = [
    'Disasters found:',
    totalDisasters.disasters,
    'out of',
    totalDisasters.tweets,
    '(',
    roundedPercent,
    '%)',
  ].join(" ");

  return (
    <section>
      <div>
        {disastersText}
      </div>
      <Radial
        percent={roundedPercent}
      />
    </section>
  );
};

const getUniqueDisastersText = () => {
  const uniqueDisastersData = getUniqueDisastersData();
  const disasterArray = new Array();
  for (let disaster of uniqueDisastersData.uniqueDisasters) {
    disasterArray.push(disaster);
  }
  console.log({ uniqueDisastersData })
  return disasterArray.join(" ");
};

const getDisastersTotals = () => {
  const data = getTotalDisasters();

  return (
    <section>
      <h3>
        <Icon iconType={IconTypes.fire} />
        Fire
      </h3>
      <div>{data.totalFire}</div>

      <h3>
        <Icon iconType={IconTypes.water} />
        Flood
      </h3>
      <div>{data.totalFlood}</div>

      <h3>
        <Icon iconType={IconTypes.hurricane} />
        Hurricanes
      </h3>
      <div>{data.totalHurricane}</div>

      <h3>
        <Icon iconType={IconTypes.tornado} />
        Tornadoes
      </h3>
      <div>{data.totalTornado}</div>
    </section>
  );
};

// TODO: Make some false positive charts

const Home = () => {
  return (
    <Fragment>
      <h1>Twitter ML Dashboard</h1>
      <h2>{getTotalDisastersWidget()}</h2>
      <h2>{getUniqueDisastersText()}</h2>
      <section>
        {getDisastersTotals()}
      </section>
      <Radial
        percent={90}
        radius={200}
      />
    </Fragment>
  );
};

export default Home;
