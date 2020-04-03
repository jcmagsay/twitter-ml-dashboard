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
            <Stats
              color="orange"
              header="Fires"
              iconType={IconTypes.fire}
            />
            <Radial
              percent={roundedFires}
            />
          </div>
          <div className="pad--48-r">
            <Stats
              color="blue"
              header="Floods"
              iconType={IconTypes.water}
            />
            <Radial
              percent={roundedFloods}
            />
          </div>
          <div className="pad--48-r">
            <Stats
              color="purple"
              header="Hurricanes"
              iconType={IconTypes.hurricane}
            />
            <Radial
              percent={roundedHurricanes}
            />
          </div>
          <div className="pad--48-r">
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
