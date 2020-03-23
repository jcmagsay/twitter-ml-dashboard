import React, { Fragment } from 'react';
import cx from 'classnames';

const Icon = (props) => {
  const {
    iconType,
  } = props;

  if (!iconType) {
    console.error(`Error! Icon is not defined for iconType: ${iconType}`);
  }

  const classes = cx(
    'mdi',
    {
      [`mdi-${iconType}`]: iconType,
    },
  );

  return (
    <i className={classes} />
  );
};

export default Icon;
