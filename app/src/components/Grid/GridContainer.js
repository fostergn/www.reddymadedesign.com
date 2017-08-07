import { connect } from 'react-redux';
import Grid from './Grid';
import { updateQuadrant, updateQuadrantMode } from '../../actions/actions'

const mapStateToProps = (state) => {
  return {
    workFilterOpen: state.workFilterOpen,
    workView: state.workView,
    workFilter: state.workFilter,
    quadrant: state.quadrant,
    quadrantMode: state.quadrantMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuadrant: (quadrant) => {
      dispatch(updateQuadrant(quadrant));
    },
    updateQuadrantMode: (mode) => {
      dispatch(updateQuadrantMode(mode));
    },
  };
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
