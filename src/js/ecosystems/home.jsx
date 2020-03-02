import React, { Fragment } from 'react';
import { getDisastersData } from '../functions/getDisastersData';

const Home = () => {
  const totalDisasters = getDisastersData();
  const disastersText = [
    'Disasters found:',
    totalDisasters.disasters,
    'out of',
    totalDisasters.tweets,
    '(',
    Number(totalDisasters.disasters / totalDisasters.tweets * 100).toFixed(2),
    '%)',
  ].join(" ");

  return (
    <Fragment>
      <h1>Twitter ML Dashboard</h1>
      <div>Home Page</div>
      <h2>{disastersText}</h2>
    </Fragment>
  );
};

export default Home;