module.exports = () => {
    const resolve = {
        modules: [
            'source/js',
            'node_modules'
        ],
        extensions: ['.jsx', '.js', '.json', '.scss'],
    };

    return resolve;
};
