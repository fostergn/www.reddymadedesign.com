import { connect } from 'react-redux';
import Landing from './Landing';
import { markLoaded} from '../../actions/actions';


const mapStateToProps = (state) => {
  return {
    landing: state.landing,
    projects: state.projects,
    features: state.features,
    hasLoaded: state.hasLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markLoaded: () => {
      dispatch(markLoaded());
    },
  };
};

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

export default LandingContainer;
