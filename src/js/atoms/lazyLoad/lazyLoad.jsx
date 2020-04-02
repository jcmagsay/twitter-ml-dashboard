import React, { useEffect } from 'react';
import cc from 'classcat';

import './lazyLoad.scss';

const LazyLoad = (props) => {
  const {
    children,
    hidden,
    tag,
    ...rest
  } = props;

  const classes = cc([
    'lazyLoad',
    {
      'lazyLoad_appear': !hidden,
    },
  ]);

  const Element = tag || "div";
  let component;

  return (
    <Element
      className={classes}
    >
      THIS IS A LAZY LOAD COMPONENT
      {children}
    </Element>
  );
};

export default LazyLoad;
