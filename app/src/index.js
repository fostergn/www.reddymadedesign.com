import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import Single from './components/Single/SingleContainer';
import Landing from './components/Landing/LandingContainer';
import List from './components/List/ListContainer';
import { configureStore } from './store';
import initialDispatch from './initialDispatch';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

// Initial AJAX requests
initialDispatch(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Landing} />
        <Route path="/:type/:id" component={Single} />
        <Route path="/list" component={List} />
      </Route>
      <Redirect from="**" to="/" />
    </Router>
  </Provider>,
  mountApp
);
