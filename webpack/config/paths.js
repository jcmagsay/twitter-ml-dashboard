const path = require('path');

module.exports = () => {
    const paths = {};
    const root = process.cwd();
    const src = path.resolve(root, 'src');

    paths.root = root;
    paths.src = src;
    paths.js = path.resolve(src, 'js');
    paths.css = path.resolve(src, 'css');
    paths.dist = path.resolve(root, 'dist');
    paths.nodeModules = path.resolve(root, 'node_modules');

    return paths;
};
