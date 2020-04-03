import React, { memo } from 'react';
import Widget from '../../../../atoms/widget/widget';
import Copy from '../../../../molecules/copy/copy';
import DonutChart from '../../../../molecules/donutChart/donutChart';
import Stats from '../../../../organisms/stats/stats';
import IconTypes from '../../../../atoms/icon/iconTypes';

const generateData = (data) => {
  return [
    {
      quantity: 2,
      percentage: 50,
      name: 'item a',
      id: 'item-a',
    },
    {
      quantity: 1,
      percentage: 25,
      name: 'item b',
      id: 'item-b',
    },
    {
      quantity: 1,
      percentage: 25,
      name: 'item c',
      id: 'item-c',
    },
  ];
};

const firstDonutTitle = "DONUT DATA";
const firstDonutDescription = "DONUT DESCRIPTION";

// ALL HAS_URL
const generateDataUrl = (dataUrl) => {
  return [
    {
      quantity: 7875,
      percentage: 56,
      name: 'No URL',
      id: 'no-url',
    },
    {
      quantity: 6145,
      percentage: 44,
      name: 'has URL',
      id: 'has-url',
    },
  ];
};


const donutTitleUrl = "HAS URL";
const donutDescriptionUrl = "Portions of all tweets that have URLs";

// 
const generateDataUrlDisaster = (dataUrlDisaster) => {
  return [
    {
      quantity: 1699,
      percentage: 60,
      name: 'No URL',
      id: 'no-url',
    },
    {
      quantity: 1121,
      percentage: 40,
      name: 'has URL',
      id: 'has-url',
    },
  ];
};


const donutTitleUrlDisaster = "HAS URL - Disaster";
const donutDescriptionUrlDisaster = "Portions of Disaster Tweets that have URLs";

const generateDataUrlNonDisaster = (dataUrlNonDisaster) => {
  return [
    {
      quantity: 6176,
      percentage: 55,
      name: 'No URL',
      id: 'no-url',
    },
    {
      quantity: 5024,
      percentage: 45,
      name: 'has URL',
      id: 'has-url',
    },
  ];
};


const donutTitleUrlNonDisaster = "HAS URL - NonDisaster";
const donutDescriptionUrlNonDisaster = "Portions of NonDisaster Tweets that have URLs";


// const generateDataUrl = (dataUrl) => {
//   return [
//     {
//       quantity: 7875,
//       percentage: 56,
//       name: 'No URL',
//       id: 'no-url',
//     },
//     {
//       quantity: 6145,
//       percentage: 44,
//       name: 'has URL',
//       id: 'has-url',
//     },
//   ];
// };


// const donutTitleUrl = "HAS URL";
// const donutDescriptionUrl = "Portions of all tweets that have URLs";

const generateDataEmoji = (dataEmoji) => {
  return [
    {
      quantity: 13664,
      percentage: 97.5,
      name: 'No Emoji',
      id: 'no-emoji',
    },
    {
      quantity: 356,
      percentage: 2.5,
      name: 'has Emoji',
      id: 'has-emoji',
    },
  ];
};

const generateDataEmojiDisaster = (dataEmojiDisaster) => {
  return [
    {
      quantity: 2820,
      percentage: 100,
      name: 'No Emoji',
      id: 'no-emoji',
    },
    {
      quantity: 0,
      percentage: 0,
      name: 'has Emoji',
      id: 'has-emoji',
    },
  ];
};

const generateDataEmojiNonDisaster = (dataEmojiNonDisaster) => {
  return [
    {
      quantity: 10844,
      percentage: 97,
      name: 'No Emoji',
      id: 'no-emoji',
    },
    {
      quantity: 356,
      percentage: 3,
      name: 'has Emoji',
      id: 'has-emoji',
    },
  ];
};

const donutTitleEmoji = "HAS EMOJI - All tweets";
const donutDescriptionEmoji = "Portion of all Tweets that have Emojis";
const donutTitleEmojiDisaster = "HAS Emoji - Disasters";
const donutDescriptionEmojiDisaster = "Portions of Disaster Tweets that have Emojis";
const donutTitleEmojiNonDisaster = "HAS Emoji - NonDisaster";
const donutDescriptionEmojiNonDisaster = "Portions of NonDisaster Tweets that have Emojis";

const generateDataPunctuation = (dataPunctuation) => {
  return [
    {
      quantity: 1260,
<<<<<<< HEAD
      percentage: 9,
=======
      percentage: 91,
>>>>>>> 754c4e0f40111446ef609c58a63f3b4239e5cbea
      name: 'No Punctuation',
      id: 'no-punc',
    },
    {
      quantity: 12760,
<<<<<<< HEAD
      percentage: 91,
=======
      percentage: 9,
>>>>>>> 754c4e0f40111446ef609c58a63f3b4239e5cbea
      name: 'has Punctuation',
      id: 'has-punc',
    },
  ];
};

const generateDataPunctuationDisaster = (dataPunctuationDisaster) => {
  return [
    {
      quantity: 490,
      percentage: 17,
      name: 'No Punctuation',
      id: 'no-punc',
    },
    {
      quantity: 2330,
      percentage: 83,
      name: 'has Punctuation',
      id: 'has-punc',
    },
  ];
};

const generateDataPunctuationNonDisaster = (dataPunctuationNonDisaster) => {
  return [
    {
      quantity: 770,
<<<<<<< HEAD
      percentage: 7,
=======
      percentage: 17,
>>>>>>> 754c4e0f40111446ef609c58a63f3b4239e5cbea
      name: 'No Punctuation',
      id: 'no-punc',
    },
    {
      quantity: 10430,
      percentage: 93,

      name: 'has Punctuation',
      id: 'has-punc',
    },
  ];
};

const donutTitlePunctuation = "HAS Punctuation - All tweets";
const donutDescriptionPunctuation = "Portion of all Tweets that have Punctuation";
const donutTitlePunctuationDisaster = "HAS Punctuation - Disasters";
const donutDescriptionPunctuationDisaster = "Portions of Disaster Tweets that have Punctuation";
const donutTitlePunctuationNonDisaster = "HAS Punctuation - NonDisaster";
const donutDescriptionPunctuationNonDisaster = "Portions of NonDisaster Tweets that have Punctuation";

// 
const DonutWidget = (props) => {
  const data = generateData();
  const dataUrl = generateDataUrl();
  const dataUrlDisaster = generateDataUrlDisaster();
  const dataUrlNonDisaster = generateDataUrlNonDisaster();

  const dataEmoji = generateDataEmoji();
  const dataEmojiDisaster = generateDataEmojiDisaster();
  const dataEmojiNonDisaster = generateDataEmojiNonDisaster();


  const dataPunctuation = generateDataPunctuation();
  const dataPunctuationDisaster = generateDataPunctuationDisaster();
  const dataPunctuationNonDisaster = generateDataPunctuationNonDisaster();

  return (
    <Widget>
      <Stats
        color="green"
        header="Donut Data"
        iconType={IconTypes.data}
      />
      <Copy
        description={firstDonutDescription}
        iconType={IconTypes.donutChart}
        title={firstDonutTitle}
      >
        <DonutChart
          data={data}
          width="300"
        />
      </Copy>

      <Copy
        description={donutDescriptionUrl}
        iconType={IconTypes.donutChart}
        title={donutTitleUrl}
      >
        <DonutChart
          data={dataUrl}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionUrlDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleUrlDisaster}
      >
        <DonutChart
          data={dataUrlDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionUrlNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleUrlNonDisaster}
      >
        <DonutChart
          data={dataUrlNonDisaster}
          width="500"
        />
      </Copy>



      <Copy
        description={donutDescriptionEmoji}
        iconType={IconTypes.donutChart}
        title={donutTitleEmoji}
      >
        <DonutChart
          data={dataEmoji}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionEmojiDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleEmojiDisaster}
      >
        <DonutChart
          data={dataEmojiDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionEmojiNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleEmojiNonDisaster}
      >
        <DonutChart
          data={dataEmojiNonDisaster}
          width="500"
        />
      </Copy>


{/*  */}
      <Copy
        description={donutDescriptionPunctuation}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuation}
      >
        <DonutChart
          data={dataPunctuation}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionPunctuationDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuationDisaster}
      >
        <DonutChart
          data={dataPunctuationDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionPunctuationNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuationNonDisaster}
      >
        <DonutChart
          data={dataPunctuationNonDisaster}
          width="500"
        />
      </Copy>

      <Copy
        description={donutDescriptionUrl}
        iconType={IconTypes.donutChart}
        title={donutTitleUrl}
      >
        <DonutChart
          data={dataUrl}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionUrlDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleUrlDisaster}
      >
        <DonutChart
          data={dataUrlDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionUrlNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleUrlNonDisaster}
      >
        <DonutChart
          data={dataUrlNonDisaster}
          width="500"
        />
      </Copy>



      <Copy
        description={donutDescriptionEmoji}
        iconType={IconTypes.donutChart}
        title={donutTitleEmoji}
      >
        <DonutChart
          data={dataEmoji}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionEmojiDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleEmojiDisaster}
      >
        <DonutChart
          data={dataEmojiDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionEmojiNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitleEmojiNonDisaster}
      >
        <DonutChart
          data={dataEmojiNonDisaster}
          width="500"
        />
      </Copy>


{/*  */}
      <Copy
        description={donutDescriptionPunctuation}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuation}
      >
        <DonutChart
          data={dataPunctuation}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionPunctuationDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuationDisaster}
      >
        <DonutChart
          data={dataPunctuationDisaster}
          width="500"
        />
      </Copy>
      <Copy
        description={donutDescriptionPunctuationNonDisaster}
        iconType={IconTypes.donutChart}
        title={donutTitlePunctuationNonDisaster}
      >
        <DonutChart
          data={dataPunctuationNonDisaster}
          width="500"
        />
      </Copy>
    </Widget>



  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default memo(DonutWidget, arePropsEqual);
