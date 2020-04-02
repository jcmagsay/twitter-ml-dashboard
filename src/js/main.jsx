import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes/routes';
import Nav from '../js/molecules/nav';

const Main = () => {
  return (
    <Router>
      <div>
        <header role="banner">
          <Nav />
        </header>
        <main id="main" role="main">
          <Switch>
            {routes.map((route, i) =>
              <Route
                exact
                key={`route-${i}`}
                path={route.path}
                render={props => {
                  return (
                    <route.component {...props} />
                  )
                }}
              />
            )}
          </Switch>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );
};

export default Main;
