import React, { Fragment } from 'react';
import Icon from '../../atoms/icon/icon';
import Radial from '../../molecules/radial/radial';
import Text from '../../atoms/text/text';

import "./widget.scss"

const Widget = (props) => {
  const {
    color,
    header,
    iconType,
    percent,
  } = props;

  return (
    <article className="widget">
      <Text
        size={72}
        centered
        color={color}
      >
        <Icon iconType={iconType} />
      </Text>
      <Radial
        percent={percent}
      />
      <Text
        size={24}
        centered
        color={color}
      >
        {header}
      </Text>
    </article>
  );
};

export default Widget;
