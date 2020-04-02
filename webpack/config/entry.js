const paths = require('./paths')();

module.exports = (isDevelopment) => {
    const entries = {
        main: [],
    };

    if (isDevelopment) {
        entries.main.push('react-hot-loader/patch');
    }

    entries.main.push(paths.js)

    return entries;
};
