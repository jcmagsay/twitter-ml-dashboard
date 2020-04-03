// npm packages
import React from 'react';

// modules/components
import Copy from '../../../../molecules/copy/copy';
import IconTypes from '../../../../atoms/icon/iconTypes';
import Stats from '../../../../organisms/stats/stats';
import Widget from '../../../../atoms/widget/widget';

const Anomalies = (props) => {

  return (
    <Widget>
      <Stats
        color="green"
        header="Anomalies"
        iconType={IconTypes.data}
      />
      <Copy
        description="There is currently an anomaly with the data, specifically tornadoes."
        iconType={IconTypes.donutChart}
        title={"Some interesting data"}
      >
        <div className="pad--110-l">
          <div>
            We noticed something really interesting with our data and ML algo, specifically for tweet 192.
          </div>
          <br />
          <div>
            The text has the following words analyzed, yet we only determine that this is a flood related tweet, not a tornado tweet.
          </div>
          <code
            className="mar--16-bt"
            style={{
              color: 'green',
              display: 'block',
              backgroundColor: 'black',
              fontFamily: 'monospace' ,
            }}
          >
            [
            <br/>
            &nbsp;&nbsp;tornado,
            <br/>
            &nbsp;&nbsp;warn,
            <br/>
            &nbsp;&nbsp;flash,
            <br/>
            &nbsp;&nbsp;flood,
            <br/>
            &nbsp;&nbsp;warn,
            <br/>
            &nbsp;&nbsp;power,
            <br/>
            &nbsp;&nbsp;outage,
            <br/>
            &nbsp;&nbsp;one,
            <br/>
            &nbsp;&nbsp;day,
            <br/>
            &nbsp;&nbsp;Loving,
            <br/>
            &nbsp;&nbsp;weather,
            <br/>
            &nbsp;&nbsp;today
            <br/>
            ]
            <br />
          </code>
          <span
            This could be a really interesting metric to visualize
          ></span>
          <br />
          <ul style={{ listStyle: 'circle' }}>
            <li>
              What was the actual disaster tweeted about?
            </li>
            <li>
              Was it the tornado or was it the flood?
            </li>
            <li>
              Some people may not be affected by the tornado, but only the flood... and vice versa
            </li>
          </ul>
        </div>
      </Copy>
    </Widget>
  );
};

export default Anomalies;
