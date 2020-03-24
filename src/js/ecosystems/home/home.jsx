//styles
import './home.scss';

// modules/components
import React, { Fragment } from 'react';
import { calculatePercentage } from '../../functions/calculatePercentage.function';
import { getDisastersData } from '../../functions/getDisastersData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import { getTotalDisasters } from '../../functions/getTotalDisasters';
import BarChart from '../../molecules/barChart/barChart';
import Radial from '../../molecules/radial/radial';
import Stats from '../../organisms/stats/stats';
import Text from '../../atoms/text/text';
import Widget from '../../atoms/widget/widget';
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

const getOverviewWidget = (dataSet) => {
  return (
    <section>
      <Widget>
        <aside>
          <Stats
            color="green"
            header="Overview"
            iconType={IconTypes.data}
          />
          <BarChart data={dataSet} />
        </aside>
        <aside className="widget_flex">
          <div>
            <Stats
              color="yellow"
              header="Non-Disasters"
              iconType={IconTypes.nonDisaster}
            />
            <Radial
              percent={
                calculatePercentage(dataSet.nonDisasters, dataSet.tweets)
              }
            />
          </div>
          <div>
            <Stats
              color="red"
              header="Disasters"
              iconType={IconTypes.disaster}
            />
            <Radial
              percent={
                calculatePercentage(dataSet.disasters, dataSet.tweets)
              }
            />
          </div>
        </aside>
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
      <Widget>
        <aside className="widget_flex">
          <div>
            <Stats
              color="orange"
              header="Fires"
              iconType={IconTypes.fire}
            />
            <Radial
              percent={roundedFires}
            />
          </div>
          <div>
            <Stats
              color="blue"
              header="Floods"
              iconType={IconTypes.water}
            />
            <Radial
              percent={roundedFloods}
            />
          </div>
          <div>
            <Stats
              color="purple"
              header="Hurricanes"
              iconType={IconTypes.hurricane}
            />
            <Radial
              percent={roundedHurricanes}
            />
          </div>
          <div>
            <Stats
              color
              header="Tornadoes"
              iconType={IconTypes.tornado}
            />
            <Radial
              percent={roundedTornadoes}
            />
          </div>
        </aside>
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
      {getOverviewWidget(dataSet)}
      <Widget>
        There is currently an anomaly with the data, specifically tornadoes.
        <h2>{getUniqueDisastersText()}</h2>
      </Widget>
      <section>
        {getDisastersTotals()}
      </section>
    </Fragment>
  );
};

export default Home;
