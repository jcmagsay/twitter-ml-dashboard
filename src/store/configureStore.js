import configureStoreDev from 'Store/configureStore.dev';
import configureStoreProd from 'Store/configureStore.prod';

if (process.env.NODE_ENV === 'production') {
  module.exports = configureStoreProd;
} else {
  module.exports = configureStoreDev;
}
