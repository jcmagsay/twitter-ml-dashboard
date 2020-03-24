//styles
import './home.scss';

// modules/components
import React, { Fragment } from 'react';
import { calculatePercentage } from '../../functions/calculatePercentage.function';
import { getDisastersData } from '../../functions/getDisastersData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import { getTotalDisasters } from '../../functions/getTotalDisasters';
import Radial from '../../molecules/radial/radial';
import Icon from '../../atoms/icon/icon';
import IconTypes from '../../atoms/icon/iconTypes';
import Widget from '../../organism/widget/widget';

const getTotalTweetsWidget = () => {
  const totalDisasters = getDisastersData();
  const roundedPercent = calculatePercentage(totalDisasters.disasters, totalDisasters.tweets);
  const disastersText = [
    'Disasters found:',
    totalDisasters.disasters,
    'out of',
    totalDisasters.tweets,
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
  const roundedFires = calculatePercentage(data.totalFire, data.totalTweets);
  const roundedFloods = calculatePercentage(data.totalFlood, data.totalTweets);
  const roundedHurricanes = calculatePercentage(data.totalHurricane, data.totalTweets);
  const roundedTornadoes = calculatePercentage(data.totalTornado, data.totalTweets);
  const nonDisasters = calculatePercentage(data.nonDisasters, data.totalTweets);
  const disasters = calculatePercentage(data.totalTweets - data.nonDisasters, data.totalTweets);

  return (
    <section>
      <Widget
        color="orange"
        header="Fires"
        iconType={IconTypes.fire}
        percent={roundedFires}
      />
      <Widget
        color="blue"
        header="Floods"
        iconType={IconTypes.water}
        percent={roundedFloods}
      />
      <Widget
        color="purple"
        header="Hurricanes"
        iconType={IconTypes.hurricane}
        percent={roundedHurricanes}
      />
      <Widget
        header="Tornadoes"
        iconType={IconTypes.tornado}
        percent={roundedTornadoes}
      />
      <Widget
        color="yellow"
        header="Non-Disasters"
        iconType={IconTypes.nonDisaster}
        percent={nonDisasters}
      />
      <Widget
        color="red"
        header="Disasters"
        iconType={IconTypes.disaster}
        percent={disasters}
      />
      <div>{data.totalTornado}</div>
    </section>
  );
};

// TODO: Make some false positive charts

const Home = () => {
  return (
    <Fragment>
      <h1>Twitter ML Dashboard</h1>
      <h2>{getTotalTweetsWidget()}</h2>
      <h2>{getUniqueDisastersText()}</h2>
      <section>
        {getDisastersTotals()}
      </section>
    </Fragment>
  );
};

export default Home;
