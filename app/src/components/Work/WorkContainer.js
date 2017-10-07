import { connect } from 'react-redux';
import Work from './Work';
import { markLoaded } from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    workView: state.workView,
    workFilter: state.workFilter,
    workFilterOpen: state.workFilterOpen,
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

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);

export default WorkContainer;
