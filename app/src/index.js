import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import Single from './components/Single/SingleContainer';
import ArchiveSingle from './components/Single/ArchiveContainer';
import Landing from './components/Landing/LandingContainer';
import About from './components/About/AboutContainer';
import Archive from './components/Calendar/ArchiveContainer';
import Exhibitions from './components/Exhibitions/ExhibitionsContainer';
import Partners from './components/Partners/PartnersContainer';
import Sponsors from './components/Sponsors/Sponsors';
import Blog from './components/Blog/BlogContainer';
import Calendar from './components/Calendar/CalendarContainer';
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
        <Route path="/calendar/:id" component={Single} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/about" component={About} />
        <Route path="/archive/:year/:monthDay" component={ArchiveSingle} />
        <Route path="/archive" component={Archive} />
        <Route path="/blog" component={Blog} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/partners" component={Partners} />
        <Route path="/sponsors" component={Sponsors} />
      </Route>
      <Redirect from="**" to="/" />
    </Router>
  </Provider>,
  mountApp
);
