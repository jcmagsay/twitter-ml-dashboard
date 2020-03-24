import React from 'react';

import "./widget.scss"

const Widget = (props) => {
  const {
    children,
  } = props;

  const Chart = () => chart;

  return (
    <article className="widget">
      {children}
    </article>
  );
};

export default Widget;
