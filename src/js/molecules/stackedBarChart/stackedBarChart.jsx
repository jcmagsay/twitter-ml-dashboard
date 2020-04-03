import React, { memo } from 'react';
import { StackedBar } from 'britecharts-react';

require('./stackedBarChart.scss');

 const confusionMatrixData = [
    {
      name: 'Negatives',
      stack: 'Bottom',
      value: 504
    },
    {
      name: 'Negatives',
      stack: 'Middle',
      value: 70
    },
    {
      name: 'Positives',
      stack: 'Bottom',
      value: 2158
    },
    {
      name: 'Positives',
      stack: 'Middle',
      value: 72
    },
];


const defaultColorSchema =
[
  '#1EB980',
  '#B15DFF',
  '#045D56',
  '#FF6859',
  '#FFCF44',
  '#DF0000',
  '#72DEFF',
];

const StackedBarChart = (props) => {

  return (
    <StackedBar
      data={confusionMatrixData}
      colorSchema={defaultColorSchema}
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

const arePropsEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  };

export default memo(StackedBarChart, arePropsEqual);
