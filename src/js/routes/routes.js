import Home from 'ecosystems/home/home';
import NotFound from '../../ecosystems/not-found';

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
