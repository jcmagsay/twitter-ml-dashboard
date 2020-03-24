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
  console.log({chartData})
  return (
    <Bar
      data={chartData}
      width={400}
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
