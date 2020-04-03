// npm packages
import React, { memo } from 'react';

// modules
import Text from '../../../../atoms/text/text';
import Widget from '../../../../atoms/widget/widget';
import Copy from '../../../../molecules/copy/copy';
import Stats from '../../../../organisms/stats/stats';
import IconTypes from '../../../../atoms/icon/iconTypes';


// functions
import getDisasterWords from '../../../../functions/getDisasterWords.function';

// styles
import './wordcloud.scss';

const negativeColors = [
  '#FFEBEE',
  '#F44336',
  '#D50000',
  '#B71C1C',
  '#EC407A',
  '#ef6c00',
  '#fb8c00',
  '#ff6d00',
  '#ffff00',
  '#ffd600',
];

const positiveColors = [
  '#1b5e20',
  '#b9f6ca',
  '#00e676',
  '#00bcd4',
  '#18ffff',
  '#8bc34a',
  '#1976d2',
  '#2962ff',
  '#e8eaf6',
  '#b39ddb',
];

const getTruthyOrFalsey = () => {
  return !Math.round(Math.random());
};

const getRandomNumber = (isPositive) => {
  return isPositive
    ? Number(Math.random(1) * 250).toPrecision(4)
    : Number(Math.random(1) * 250).toPrecision(4) * -1;
};

const getRandomDegree = (isPositive) => {
  const multiplier = isPositive ? 1 : -1;
  return multiplier * Number(Math.random(180) * 100).toPrecision(4);
};

const getRandomColor = (isPositive) => {
  const colorArray = isPositive
    ? positiveColors
    : negativeColors;

  return colorArray[Math.floor(Math.random() * positiveColors.length)];
};

const getHash = () => {
  return Math.random().toString(36).substring(7);
};

const getData = () => {
  const data = getDisasterWords();

  return {
    uniqueDisasterWords: data.uniqueDisasterWords,
    uniqueNonDisasterWords: data.uniqueNonDisasterWords,
    totalWords: data.totalWords,
  }
};

const parseWords = (wordArray, isPositive = false) => {
  if (!wordArray) return <div/>;

  return wordArray.map((wordObj) => {
    // setup for text node
    const isPositiveX = getTruthyOrFalsey();
    const isPositiveY = getTruthyOrFalsey();
    const x = getRandomNumber(isPositiveX);
    const y = getRandomNumber(isPositiveY);
    const degree = getRandomDegree(getTruthyOrFalsey());
    const randomColor = getRandomColor(isPositive);
    const hash = getHash();

    return (
      <text
        fill={randomColor}
        key={`${wordObj.text}-${hash}`}
        className="wordcloud-text"
        textAnchor="middle"
        transform={`translate(${x}, ${y}) rotate(${degree})`}
      >
        {wordObj.text}
      </text>
    );
  });
};

const transformMapToArray = (map, limit = 5000) => {
  const array = new Array();

  map.forEach((value, key, map) => {
    array.push(value);
  });

  return array.slice(0, limit);
};

const renderCloud = (title, data, color) => {
  return (
    <Widget>
      <Stats
        color={color}
        header={title}
        iconType={IconTypes.words}
      />
      <svg className="wordcloud" width="100%" height="750" viewBox="0 0 200 200">
        <g width="1000" height="750">
          {data}
        </g>
      </svg>
    </Widget>
  )
};

const WordCloud = (props) => {
  const dataMap = getData();

  const disastersArray = transformMapToArray(dataMap.uniqueDisasterWords);
  const nonDisastersArray = transformMapToArray(dataMap.uniqueDisasterWords);
  console.log({ disastersArray, nonDisastersArray });
  return (
    <section>
      {renderCloud('Disaster Words', parseWords(disastersArray), "yellow")}
      {renderCloud('Non-Disaster Words', parseWords(nonDisastersArray, true, "blue"))}
    </section>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(WordCloud, arePropsEqual);
