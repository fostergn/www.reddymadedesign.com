import { connect } from 'react-redux';
import Landing from './Landing';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const LandingContainer = connect(
  mapStateToProps
)(Landing);

export default LandingContainer;
