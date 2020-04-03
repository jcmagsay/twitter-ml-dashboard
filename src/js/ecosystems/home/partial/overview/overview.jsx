// npm packages
import React, { useEffect } from 'react';

// modules/components
import { calculatePercentage } from '../../../../functions/calculatePercentage.function';
import Stats from '../../../../organisms/stats/stats';
import BarChart from '../../../../molecules/barChart/barChart';
import StackedBarChart from '../../../../molecules/stackedBarChart/stackedBarChart';
import Radial from '../../../../molecules/radial/radial';
import Copy from '../../../../molecules/copy/copy';
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

  const percentNonDisaster = calculatePercentage(
    dataSetDisasterNumbers.nonDisasters,
    dataSetDisasterNumbers.tweets
  );

  const percentDisaster = calculatePercentage(
    dataSetDisasterNumbers.disasters,
    dataSetDisasterNumbers.tweets
  );

  const totalDisasterDescription = 'Overall, we found that there were significantly more non-disaster tweets. Knowing this, we were able to eliminate the irrelevant tweets to process the actual disaster tweets.';
  const nonDisasterDescription = `${percentNonDisaster}% of the tweets we determined were non-disasters`;
  const disasterDescription = `${percentDisaster}% of the tweets we determined were non-disasters`;
  const falsePosNegDescription = 'This chart shows the amount of True Positives and False Positives in contrast to True Negatives and False Positives. We took these into consideration during our ML processing to determin which tweets were truly disasters, vs. misleading tweets causing the FalsePositive. As you can see, the results showed that we had a small potential for error using our algorithm.';

  return (
    <LazyLoad
      tag="section"
      hidden={false}
    >
      <Widget>
        <aside className="mar--60-b">
          <Stats
            color="green"
            header="Overview"
            iconType={IconTypes.data}
          />
          <Copy
            description={totalDisasterDescription}
            iconType={IconTypes.barChartLeft}
            title="Total Disasters"
          >
            <BarChart data={dataSetDisasterNumbers} />
          </Copy>
        </aside>
        <aside className="flex flex--column">
          <Copy
            iconType={IconTypes.nonDisaster}
            color="yellow"
            title="Non-Disasters"
            description={nonDisasterDescription}
          >
            <Radial
              percent={percentNonDisaster}
            />
          </Copy>
          <Copy
            iconType={IconTypes.disaster}
            color="red"
            title="Non-Disasters"
            description={disasterDescription}
          >
            <Radial
              percent={percentDisaster}
            />
          </Copy>
          <Copy
            description={falsePosNegDescription}
            iconType={IconTypes.barChartLeft}
            title="False Positive/Negatives"
          >
            <StackedBarChart />
          </Copy>
        </aside>
        <aside>
        </aside>
      </Widget>
    </LazyLoad>
  );
};

export default Overview;
