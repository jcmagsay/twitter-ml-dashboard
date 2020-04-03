// npm packages
import React, { Fragment } from 'react';
import { connect } from 'react-redux'

// modules/components
import { getDisastersData } from '../../functions/getDisastersData';
import { getFalseData } from '../../functions/getFalseData';
import { getUniqueDisastersData } from '../../functions/getUniqueDisastersData';
import Radial from '../../molecules/radial/radial';
import Stats from '../../organisms/stats/stats';
import Text from '../../atoms/text/text';
import Widget from '../../atoms/widget/widget';
import IconTypes from '../../atoms/icon/iconTypes';

// partials
import Overview from './partial/overview/overview';
import WordCloud from './partial/wordcloud/wordcloud';
import DonutWidget from './partial/donutWidget/donutWidget';
import Anomalies from './partial/anomalies/anomalies';
import Disasters from './partial/disasters/disasters';

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

const Home = (props) => {
  const {
    visibility,
    updateVisibility,
  } = props;

  const dataSetDisasterNumbers = getDataDisasters();

  return (
    <Fragment>
      <Text
        centered
        size="34"
        tag="h1"
      >
        Regressionists - Twitter ML Dashboard
      </Text>
      <Overview
        dataSetDisasterNumbers={dataSetDisasterNumbers}
        visibility={visibility}
        callback={updateVisibility}
        {...props}
      />
      <DonutWidget/>
      <Disasters />
      <Anomalies />
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
