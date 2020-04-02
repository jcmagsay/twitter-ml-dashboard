import React, { Fragment } from 'react';
import cc from 'classcat';

const Icon = (props) => {
  const {
    iconType,
  } = props;

  if (!iconType) {
    console.error(`Error! Icon is not defined for iconType: ${iconType}`);
  }

  const classes = cc([
    'mdi',
    {
      [`mdi-${iconType}`]: iconType,
    },
  ]);

  return (
    <i className={classes} />
  );
};

export default Icon;
