import React, { Fragment, Children } from 'react';
import Icon from '../../atoms/icon/icon';
import Radial from '../../molecules/radial/radial';
import Text from '../../atoms/text/text';

import "./widget.scss"

const Widget = (props) => {
  const {
    children,
    color,
    header,
    iconType,
  } = props;

  const Chart = () => chart;

  return (
    <article className="widget">
      <Text
        size={24}
        centered
        color={color}
      >
        {header}
      </Text>
      <Text
        size={72}
        centered
        color={color}
      >
        <Icon iconType={iconType} />
      </Text>
      {children}
    </article>
  );
};

export default Widget;
