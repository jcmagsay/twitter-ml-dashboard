// npm packages
import React, { memo } from 'react';

// modules
import Text from '../../../../atoms/text/text';
import Widget from '../../../../atoms/widget/widget';

// functions
import getDisasterWords from '../../../../functions/getDisasterWords.function';

// styles
import './wordcloud.scss';

const getData = () => {
  const data = getDisasterWords();

  return {
    uniqueDisasterWords: data.uniqueDisasterWords,
    uniqueNonDisasterWords: data.uniqueNonDisasterWords,
    totalWords: data.totalWords,
  }
};

const parseWords = (wordMap, isPositive = false) => {
  const words = [];

  for (const word of wordMap) {
    const isPositiveX = !Math.round(Math.random());
    const isPositiveY = !Math.round(Math.random());
    const x = isPositiveX
      ? Number(Math.random(1) * 250).toPrecision(4)
      : Number(Math.random(1) * 250).toPrecision(4) * -1;
    const y = isPositiveY
      ? Number(Math.random(1) * 250).toPrecision(4)
      : Number(Math.random(1) * 250).toPrecision(4) * -1
    const degree = Number(Math.random(180) * 100).toPrecision(4);

    var negativeColors = [
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
    var positiveColors = [
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

    var randomColor = isPositive
      ? positiveColors[Math.floor(Math.random() * positiveColors.length)]
      : negativeColors[Math.floor(Math.random() * negativeColors.length)];

    words.push(
      <text
        fill={randomColor}
        key={word[0]}
        className="wordcloud-text"
        textAnchor="middle"
        transform={`translate(${x}, ${y}) rotate(${degree})`}
      >
        {word[0]}
      </text>
    );
  }
  return words;
};

const renderCloud = (title, data) => {
  return (
    <Widget>
      <Text size="24" tag="h2">{title}</Text>
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

  const disasterData = parseWords(dataMap.uniqueDisasterWords);
  console.log({ disasterData})
  return (
    <section>
      {renderCloud('Disaster Words', parseWords(dataMap.uniqueDisasterWords))}
      {renderCloud('Non-Disaster Words', parseWords(dataMap.uniqueNonDisasterWords, true))}
    </section>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(WordCloud, arePropsEqual);
