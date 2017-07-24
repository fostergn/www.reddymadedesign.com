import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    isNavOpen: state.isNavOpen,
  };
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
