import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import Single from './components/Single/SingleContainer';
import Landing from './components/Landing/LandingContainer';
import Work from './components/Work/WorkContainer';
import About from './components/About/AboutContainer';
import News from './components/News/NewsContainer';
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
        <Route path="/work/:id" component={Single} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/work" component={Work} />
      </Route>
      <Redirect from="**" to="/" />
    </Router>
  </Provider>,
  mountApp
);
