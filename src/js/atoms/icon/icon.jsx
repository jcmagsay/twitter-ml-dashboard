import React, { Fragment } from 'react';
import cc from 'classcat';

// styles
import './icon.scss';

const Icon = (props) => {
  const {
    iconType,
    color,
    size = '12',
  } = props;

  if (!iconType) {
    console.error(`Error! Icon is not defined for iconType: ${iconType}`);
  }

  const classes = cc([
    'icon',
    'mdi',
    {
      [`mdi-${iconType}`]: iconType,
      [`icon--${size}`]: size,
      [`icon--${color}`]: color,
    },
  ]);

  return (
    <i className={classes} />
  );
};

export default Icon;
