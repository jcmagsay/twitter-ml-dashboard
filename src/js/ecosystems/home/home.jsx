// npm packages
import React, { Fragment } from 'react';
import { connect } from 'react-redux'

// modules/components
import { calculatePercentage } from '../../functions/calculatePercentage.function';
import { getDisastersData } from '../../functions/getDisastersData';
import { getFalseData } from '../../functions/getFalseData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import { getTotalDisasters } from '../../functions/getTotalDisasters';
import Radial from '../../molecules/radial/radial';
import Stats from '../../organisms/stats/stats';
import Text from '../../atoms/text/text';
import Widget from '../../atoms/widget/widget';
import IconTypes from '../../atoms/icon/iconTypes';

// partials
import Overview from './partial/overview/overview';
import WordCloud from './partial/wordcloud/wordcloud';
import DonutWidget from './partial/donutWidget/donutWidget';

//styles
require('./home.scss');

const getDataDisasters = () => {
  const data = getDisastersData();
  const disasters = data.disasters;
  const nonDisasters = data.tweets - data.disasters;

  return {
    tweets: data.tweets,
    disasters,
    nonDisasters,
  }
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

const Home = (props) => {
  const {
    visibility,
    updateVisibility,
  } = props;

  const dataSetDisasterNumbers = getDataDisasters();
  // const dataSetFalseNumbers = getFalseData();
  // same as this, since I implemented the new 
  const dataSetFalseNumbers = { 
    falseNegaties: 78,
    falsePositives: 70
  };
  

  return (
    <Fragment>
      <Text size="34" tag="h1">Twitter ML Dashboard</Text>
      <Overview
        dataSetDisasterNumbers={dataSetDisasterNumbers}
        dataSetFalseNumbers={dataSetFalseNumbers}
        visibility={visibility}
        callback={updateVisibility}
        {...props}
      />
      <DonutWidget/>
      <Widget>
        <Text size="24" tag="h2">Anomalies</Text>
        <Text size="14" tag="h4">
          There is currently an anomaly with the data, specifically tornadoes.
        </Text>
        <h2>{getUniqueDisastersText()}</h2>
      </Widget>
      <section>
        {getDisastersTotals()}
      </section>
      <WordCloud />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  ...state,
  visibility: true,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateVisibility(visibility) {
    },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
