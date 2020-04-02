import React from 'react';
import cc from 'classcat';

require('./scss/radial');

const Radial = (props) => {

  const {
    radius = 100, // TODO: ensure that only certain values can be selected
    percent,
    text,
  } = props;

  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percent / 100 * circumference;

  const classes = cc([
    'radial',
    {
      [`radial_${radius}`]: `radial_${radius}`,
    },
  ]);
  const viewBoxSize = radius * 2;

  return (
    <svg
      className={classes}
      height={viewBoxSize}
      width={viewBoxSize}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <circle
        className="radial__fg"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={0}
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="radial__bg"
        strokeWidth={ stroke }
        strokeDasharray={ `${circumference} ${circumference}` }
        style={ { strokeDashoffset } }
        strokeWidth={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
      />
      {
        percent
        && (
          <text
            className="radial__text"
            x="50%"
            y="50%"
          >
            {text ? text : `${percent}%` }
          </text>
        )
      }
    </svg>
  );
};

export default Radial;
