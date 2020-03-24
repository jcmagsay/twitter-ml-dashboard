import React, { Component } from 'react';
import cx from 'classnames';

import * as styles from './text.scss';

const Text = (props) => {
  const {
    align,
    centered,
    children,
    className,
    color,
    tag,
    size,
    weight,
    underlined,
  } = props;

  const TagVariant = tag || 'div';

  const textClasses = cx([
    'text',
    {
      [`text_${align}`]: align,
      [`text_${color}`]: color,
      [`text_${size}`]: size,
      [`text_${weight}`]: weight,
      [`text-centered`]: centered,
      [`text-underlined`]: underlined,
    },
    className,
  ]);

  // TODO: make this better
  <style>{styles}</style>

  return (
    <TagVariant className={textClasses}>
      {children}
    </TagVariant>
  );
};

export default Text;
