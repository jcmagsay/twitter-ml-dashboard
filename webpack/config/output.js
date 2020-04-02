const paths = require('./paths')();

module.exports = (isDevelopment) => {
    let publicPath = '/dist/';

    if (process.env.publicPath) {
        publicPath = 'https://twitter-ml-dashboard.herokuapp.com/' + process.env.publicPath + '/';
    }

    if (isDevelopment) {
        publicPath = 'https://localhost:3000/bundles/';
    }

    console.log('\n---------');
    console.log(`The public path for webpack is: ${publicPath}`);
    console.log('---------\n');

    const output = {
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename : '[name].js',
        path: paths.dist,
        publicPath,
    };

    return output;
};
