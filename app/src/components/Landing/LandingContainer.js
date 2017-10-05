import { connect } from 'react-redux';
import Landing from './Landing';

const mapStateToProps = (state) => {
  return {
    landing: state.landing,
    projects: state.projects,
    features: state.features,
  };
};

const LandingContainer = connect(
  mapStateToProps
)(Landing);

export default LandingContainer;
