import data from '../../../data/exploration/jsons/train_has_mention.json';

const handleMapping = (wordMap, word) => {
  // This takes quite a bit of time to process

  if (wordMap) {
    const record = wordMap.get(word);

    if (!record) {
      wordMap.set(
        word,
        {
          text: word,
          value: 1,
        },
      );
    } else {
      const increasedValue = record.value++;

      wordMap.set(
        word,
        {
          text: word,
          value: increasedValue,
        },
      );
    }
  }
};

const getDisasterWords = () => {
  let totalWords = 0;
  let totalUniqueWords = 0;
  const disasterWords = new Set();
  const nonDisasterWords = new Set();

  const uniqueDisasterWords = new Map();
  const uniqueNonDisasterWords = new Map();

  Object.values(data.disaster).forEach((value, index) => {
    const isDisaster = value;
    const tweet = data['text_processed'][index];

    tweet.forEach((word) => {
      // const wordExists = uniqueWords.get(word);

      if (isDisaster) {
        disasterWords.add(word);
        handleMapping(uniqueDisasterWords, word);
      } else {
        totalUniqueWords++;
        console.log("ADDING UNIQUE WORD")
        nonDisasterWords.add(word);
        handleMapping(uniqueNonDisasterWords, word);
      }
      totalWords++;
    });

    console.log({
      totalWords,
      totalUniqueWords,
    });
  });


  const returnObj = {
    totalWords: disasterWords.size + nonDisasterWords.size,
    // disasterWords,
    // nonDisasterWords,
    uniqueDisasterWords,
    uniqueNonDisasterWords,
  };

  console.log({returnObj})
  return returnObj;
};

export default getDisasterWords;
