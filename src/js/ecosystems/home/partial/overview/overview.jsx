// npm packages
import React, { useEffect } from 'react';

// modules/components
import { calculatePercentage } from '../../../../functions/calculatePercentage.function';
import BarChart from '../../../../molecules/barChart/barChart';
import StackedBarChart from '../../../../molecules/stackedBarChart/stackedBarChart';
import Radial from '../../../../molecules/radial/radial';
import Stats from '../../../../organisms/stats/stats';
import Widget from '../../../../atoms/widget/widget';
import IconTypes from '../../../../atoms/icon/iconTypes';
import LazyLoad from '../../../../atoms/lazyLoad/lazyLoad';

const isInViewport = (component, offset = 0) => {
  if (!component) return false;
  const top = component.getBoundingClientRect().top;
  return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
};

const Overview = (props) => {
  const {
    dataSetDisasterNumbers,
    visibility,
    callback,
  } = props;

  return (
    <LazyLoad
      tag="section"
      hidden={false}
    >
      <Widget>
        <aside>
          <Stats
            color="green"
            header="Overview"
            iconType={IconTypes.data}
          />
          <BarChart data={dataSetDisasterNumbers} />
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
                calculatePercentage(dataSetDisasterNumbers.nonDisasters, dataSetDisasterNumbers.tweets)
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
                calculatePercentage(dataSetDisasterNumbers.disasters, dataSetDisasterNumbers.tweets)
              }
            />
          </div>
        </aside>
        <aside>
          <StackedBarChart />
        </aside>
      </Widget>
    </LazyLoad>
  );
};

export default Overview;
