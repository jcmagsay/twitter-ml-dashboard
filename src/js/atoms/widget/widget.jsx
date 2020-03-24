import React from 'react';

require('./scss/widget.scss');

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
