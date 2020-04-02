module.exports = (isDevelopment) => {
    return isDevelopment ? 'eval' : false;
};
