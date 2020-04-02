import React, { Fragment } from 'react';
import cc from 'classcat';

const LazyLoad = (props) => {
  const {
    children,
    hidden = true,
    tag = div,
  } = props;

  const classes = cc([
    'lazyLoad',
    {
      'lazyLoad_hidden': hidden,
    },
  ]);

  const Element = tag;

  return (
    <Element className={classes}>
      THIS IS A LAZY LOAD COMPONENT
      {children}
    </Element>
  );
};

export default LazyLoad;
