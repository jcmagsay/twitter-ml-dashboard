import React from 'react';

import "./scss/widget"

const Widget = (props) => {
  const {
    children,
  } = props;

  return (
    <article className="widget">
      {children}
    </article>
  );
};

export default Widget;
