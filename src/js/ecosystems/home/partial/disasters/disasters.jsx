// npm packages
import React from 'react';

// funcs
import { calculatePercentage } from '../../../../functions/calculatePercentage.function';

// data
import { getTotalDisasters } from '../../../../functions/getTotalDisasters';

// modules/components
import Copy from '../../../../molecules/copy/copy';
import IconTypes from '../../../../atoms/icon/iconTypes';
import Widget from '../../../../atoms/widget/widget';
import Radial from '../../../../molecules/radial/radial';
import Stats from '../../../../organisms/stats/stats';

const getDisastersTotals = () => {
  const data = getTotalDisasters();
  const roundedFires = calculatePercentage(data.totalFire, data.totalTweets);
  const roundedFloods = calculatePercentage(data.totalFlood, data.totalTweets);
  const roundedHurricanes = calculatePercentage(data.totalHurricane, data.totalTweets);
  const roundedTornadoes = calculatePercentage(data.totalTornado, data.totalTweets);

  return (
    <section>
      <Widget>
        <aside className="flex flex--column">
          <div className="pad--48-r">
            <Copy
              color="orange"
              description={`${roundedTornadoes}% total Fires`}
              iconType={IconTypes.fire}
              title="Fires"
            >
              <Radial
                percent={roundedFires}
              />
            </Copy>
          </div>
          <div className="pad--48-r">
            <Copy
              color="blue"
              description={`${roundedTornadoes}% total Floods`}
              iconType={IconTypes.water}
              title="Floods"
            >
              <Radial
                percent={roundedFloods}
              />
            </Copy>
          </div>
          <div className="pad--48-r">
            <Copy
              color="purple"
              description={`${roundedTornadoes}% total Hurricanes`}
              iconType={IconTypes.hurricane}
              title="Hurricanes"
            >
              <Radial
                percent={roundedHurricanes}
              />
            </Copy>
          </div>
          <div className="pad--48-r">
            <Copy
              description={`${roundedTornadoes}% total Tornadoes`}
              iconType={IconTypes.tornado}
              title="Tornadoes"
            >
              <Radial
                percent={roundedTornadoes}
              />
            </Copy>
          </div>
        </aside>
      </Widget>
    </section>
  );
};

const Disasters = (props) => {

  return (
    <Widget>
      <Stats
        color="yellow"
        header="Disasters Data"
        iconType={IconTypes.data}
      />
      <Copy
        description="These are highlights of the percentages of each disaster within the tweets overall"
        iconType={IconTypes.donutChart}
        title={"Disasters as Percents"}
      >
        {getDisastersTotals()}
      </Copy>
    </Widget>
  );
};

export default Disasters;
