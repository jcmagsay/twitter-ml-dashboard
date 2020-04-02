import React, { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes/routes';
import Nav from '../js/molecules/nav';
import debounce from './utilities/debounce';

import {
  uiActions,
  uiSelectors,
} from '../ducks/ui';

const updateViewport = (callback, viewport) => {
  if (
    viewport
    && (
      window.visualViewport.pageTop !== viewport.pageTop
      || window.visualViewport.pageLeft !== viewport.pageLeft
    )
  ) {
    callback({
      ...viewport,
      pageLeft: window.visualViewport.pageLeft,
      pageTop: window.visualViewport.pageTop,
    });
  }
}

const Main = (props) => {
  const {
    viewport,
  } = props;

  useEffect(() => {
    // set viewport dimensions
    if (!viewport ) {
      props.setViewport({
        offsetLeft: window.visualViewport.offsetLeft,
        offsetTop: window.visualViewport.offsetTop,
        pageLeft: window.visualViewport.pageLeft,
        pageTop: window.visualViewport.pageTop,
        width: window.visualViewport.width,
        height: window.visualViewport.height,
        scale: window.visualViewport.scale,
      });
    }

    window.addEventListener('scroll', debounce(
      () => updateViewport(props.setViewport, viewport),
      100,
    ));
  });

  return (
    <Router>
      <div>
        <header role="banner">
          <Nav />
        </header>
        <main id="main" role="main" onScroll={updateViewport}>
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

const mapStateToProps = state => ({
  viewport: uiSelectors.selectorViewport(state),
  pageLoaded: false,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    setViewport(viewport) {
      dispatch(
        uiActions.setViewport(viewport)
      );
    },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
