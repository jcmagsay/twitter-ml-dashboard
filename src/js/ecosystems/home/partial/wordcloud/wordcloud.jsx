// npm packages
import React, { memo } from 'react';

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

const parseWords = (wordMap) => {
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
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

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

const WordCloud = (props) => {
  const dataMap = getData();

  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 360;

  const disasterData = parseWords(dataMap.uniqueDisasterWords);
  console.log({ disasterData})
  return (
    <section>
      Disaster Words
      <svg className="wordcloud" width="90%" height="750" viewBox="0 0 200 200">
        <g width="1000" height="750">
          {disasterData}
        </g>
      </svg>
      Non-Disaster Words
    </section>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(WordCloud, arePropsEqual);
