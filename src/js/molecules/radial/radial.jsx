import React from 'react';
import cx from 'classnames';
import './radial.scss';

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

  const classes = cx(
    'radial',
    {
      [`radial_${radius}`]: `radial_${radius}`,
    },
  );
  const viewBoxSize = radius * 2;

  return (
    <svg
      className={classes}
      height={radius * 2}
      width={radius * 2}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <circle
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
