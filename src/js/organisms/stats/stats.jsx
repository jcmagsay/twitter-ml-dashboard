import React from 'react';
import Icon from '../../atoms/icon/icon';
import Text from '../../atoms/text/text';

const Stats = (props) => {
  const {
    children,
    color,
    header,
    iconType,
  } = props;


  return (
    <div className="stats">
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
    </div>
  );
};

export default Stats;
