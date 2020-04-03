import React, { memo } from 'react';
import Widget from '../../../../atoms/widget/widget';
import Text from '../../../../atoms/text/text';
import Copy from '../../../../molecules/copy/copy';
import DonutChart from '../../../../molecules/donutChart/donutChart';
import Stats from '../../../../organisms/stats/stats';
import IconTypes from '../../../../atoms/icon/iconTypes';

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

const firstDonutTitle = "DONUT DATA";
const firstDonutDescription = "DONUT DESCRIPTION";

const DonutWidget = (props) => {
  const data = generateData();
  return (
    <Widget>
      <Stats
        color="green"
        header="Donut Data"
        iconType={IconTypes.data}
      />
      <Copy
        description={firstDonutDescription}
        iconType={IconTypes.donutChart}
        title={firstDonutTitle}
      >
        <DonutChart
          data={data}
          width="500"
        />
      </Copy>
    </Widget>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(DonutWidget, arePropsEqual);
