import data from '../../../data/train.json';

const getDisastersData = () => {
  const disasters = data.disaster;
  if (disasters) {
    const filteredDisasters = Object.values(data.disaster).filter((value) => value === 1);
    const totalTweets = Object.values(data.disaster)

    return {
      disasters: filteredDisasters.length,
      tweets: totalTweets.length,
    };
  }
};

export {
  getDisastersData,
};
