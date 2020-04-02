import React, { memo } from 'react';
import { Donut } from 'britecharts-react';

require('./donutChart.scss');

const DonutChart = (props) => {
  const {
    data,
    width,
  } = props;


  return (
    <Donut
      data={data}
      height={width}
      width={width}
      externalRadius={width / 2.5}
      internalRadius={width / 5}
      isAnimated={true}
      // highlightSliceById={this.state.highlightedSlice}
      // customMouseOver={this._handleMouseOver.bind(this)}
      // customMouseOut={this._handleMouseOut.bind(this)}
    />
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(DonutChart, arePropsEqual);
