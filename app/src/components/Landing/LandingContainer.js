import { connect } from 'react-redux';
import Landing from './Landing';

const mapStateToProps = (state) => {
  return {
    landing: state.landing,
  };
};

const LandingContainer = connect(
  mapStateToProps
)(Landing);

export default LandingContainer;
