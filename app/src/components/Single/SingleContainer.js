import { connect } from 'react-redux';
import { toggleFullscreen, changeWorkView, changeListFilter } from '../../actions/actions';
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
    changeWorkView: (view) => {
      dispatch(changeWorkView(view));
    },
    changeListFilter: (filter) => {
      dispatch(changeListFilter(filter));
    },
  };
};

const SingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default SingleContainer;
