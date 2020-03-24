import React from 'react';
import { Bar } from 'britecharts-react';

import './barchart.scss';

const generateData = (data) => {
  const {
    tweets,
    ...rest
  } = data;

  return Object.keys(rest).map((record) => {
    return {
      name: record,
      value: data[record],
    };
  });
};

const BarChart = (props) => {
  const {
    data,
  } = props;

  const chartData = generateData(data);

  return (
    <Bar
      data={chartData}
      colorSchema={[
        '#B15DFF',
        '#1EB980',
        '#045D56',
        '#FF6859',
        '#FFCF44',
        '#DF0000',
        '#72DEFF',
      ]}
      enableLabels
      labelsNumberFormat="1"
      isAnimated
      height={200}
      width={600}
      isHorizontal={true}
      margin={({
        bottom: 20,
        left: 130,
        right: 0,
        top: 20,
      })}
    />
  );
};

export default BarChart;