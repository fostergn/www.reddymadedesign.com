import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    hasLoaded: state.hasLoaded,
  };
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
