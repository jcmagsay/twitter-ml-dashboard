import React from 'react';

import * as styles from "./widget.scss"

const Widget = (props) => {
  const {
    children,
  } = props;

  // TODO: MAKE THIS BETTER!
  <style>{styles}</style>

  return (
    <article className="widget">
      {children}
    </article>
  );
};

export default Widget;
