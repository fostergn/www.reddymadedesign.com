import { connect } from 'react-redux';
import Grid from './Grid';
import { updateQuadrant, updateQuadrantMode, changeGridFilter } from '../../actions/actions'

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    workFilterOpen: state.workFilterOpen,
    workView: state.workView,
    gridFilter: state.gridFilter,
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
    changeGridFilter: (filter) => {
      dispatch(changeGridFilter(filter));
    },
  };
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
