import React from 'react';
import Icon from '../../atoms/icon/icon';
import Text from '../../atoms/text/text';

// styles
import './stats.scss'

const Stats = (props) => {
  const {
    children,
    color,
    header,
    iconType,
  } = props;


  return (
    <div className="stats flex flex--align-center mar--80-b">
      <Text
        className="stats__icon"
        color={color}
        size={72}
      >
        <Icon iconType={iconType} size="56" />
      </Text>
      <Text
        className="stats__heading pad--32-l"
        color={color}
        size={56}
      >
        {header}
      </Text>
      {children}
    </div>
  );
};

export default Stats;
