import { connect } from 'react-redux';
import Work from './Work';
// import { toggleFilterMenu } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    workView: state.workView,
    workFilter: state.workFilter,
    workFilterOpen: state.workFilterOpen,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFilterMenu: () => {
//       dispatch(toggleFilterMenu());
//     },
//   };
// };

const WorkContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(Work);

export default WorkContainer;
