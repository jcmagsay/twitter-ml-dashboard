//styles
import './home.scss';

// modules/components
import React, { Fragment } from 'react';
import { calculatePercentage } from '../../functions/calculatePercentage.function';
import { getDisastersData } from '../../functions/getDisastersData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import { getTotalDisasters } from '../../functions/getTotalDisasters';
import Widget from '../../organism/widget/widget';
import BarChart from '../../molecules/barChart/barChart';
import Radial from '../../molecules/radial/radial';
import Text from '../../atoms/text/text';
import IconTypes from '../../atoms/icon/iconTypes';

const getData = () => {
  const data = getDisastersData();
  const disasters = data.disasters;
  const nonDisasters = data.tweets - data.disasters;

  return {
    tweets: data.tweets,
    disasters,
    nonDisasters,
  }
};

const getTotalTweetsWidget = (dataSet) => {
  return (
    <section>
      <Widget
        header="Overview"
        iconType={IconTypes.data}
      >
        <BarChart data={dataSet} />
        <br />
        <Text size={34} centered>
          {dataSet.disasters}/{dataSet.tweets} recorded disasters
        </Text>
      </Widget>
      <Widget
        color="yellow"
        header="Non-Disasters"
        iconType={IconTypes.nonDisaster}
      >
        <Radial
          percent={
            calculatePercentage(dataSet.nonDisasters, dataSet.tweets)
          }
        />
      </Widget>
      <Widget
        color="red"
        header="Disasters"
        iconType={IconTypes.disaster}
      >
        <Radial
          percent={
            calculatePercentage(dataSet.nonDisasters, dataSet.tweets)
          }
        />
      </Widget>
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

  return (
    <section>
      <Widget
        color="orange"
        header="Fires"
        iconType={IconTypes.fire}
      >
        <Radial
          percent={roundedFires}
        />
      </Widget>
      <Widget
        color="blue"
        header="Floods"
        iconType={IconTypes.water}
      >
        <Radial
          percent={roundedFloods}
        />
      </Widget>
        percent={roundedFloods}
      />
      <Widget
        color="purple"
        header="Hurricanes"
        iconType={IconTypes.hurricane}
      >
        <Radial
          percent={roundedHurricanes}
        />
      </Widget>
      <Widget
        header="Tornadoes"
        iconType={IconTypes.tornado}
      >
        <Radial
          percent={roundedTornadoes}
        />
      </Widget>
    </section>
  );
};

// TODO: Make some false positive charts

const Home = () => {
  const dataSet = getData();
  return (
    <Fragment>
      <Text size="34" tag="h1">Twitter ML Dashboard</Text>
      <h2>{getTotalTweetsWidget(dataSet)}</h2>
      <h2>{getUniqueDisastersText()}</h2>
      <section>
        {getDisastersTotals()}
      </section>
    </Fragment>
  );
};

export default Home;
