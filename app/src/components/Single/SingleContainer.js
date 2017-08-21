import { connect } from 'react-redux';
import { toggleFullscreen } from '../../actions/actions';
import Single from './Single';

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    isFullscreen: state.isFullscreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFullscreen: () => {
      dispatch(toggleFullscreen());
    },
  };
};

const SingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default SingleContainer;
