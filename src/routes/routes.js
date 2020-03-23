import Home from '../js/ecosystems/home/home';
import NotFound from '../js/ecosystems/not-found';

const routes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound
  }
];

export default routes;
