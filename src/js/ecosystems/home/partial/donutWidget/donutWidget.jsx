import React, { memo } from 'react';
import Widget from '../../../../atoms/widget/widget';
import Text from '../../../../atoms/text/text';
import DonutChart from '../../../../molecules/donutChart/donutChart';

const generateData = (data) => {
  return [
    {
      quantity: 1,
      percentage: 50,
      name: 'item a',
      id: 'item-a',
    },
    {
      quantity: 1,
      percentage: 30,
      name: 'item b',
      id: 'item-b',
    },
    {
      quantity: 1,
      percentage: 20,
      name: 'item c',
      id: 'item-c',
    },
  ];
};

const DonutWidget = (props) => {
  const data = generateData();
  return (
    <Widget>
      <Text size="24" tag="h2">Donuts of Data</Text>
      <DonutChart
        data={data}
        width="500"
      />
    </Widget>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(DonutWidget, arePropsEqual);
