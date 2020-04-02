import React, { Component } from 'react';
import cc from 'classcat';

require('./scss/text.scss');

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

  const textClasses = cc([
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

  return (
    <TagVariant className={textClasses}>
      {children}
    </TagVariant>
  );
};

export default Text;
