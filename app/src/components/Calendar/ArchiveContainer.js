import { connect } from 'react-redux';
import { toggleFilter, changeView } from '../../actions/actions';
import Archive from './Archive';

const mapStateToProps = (state) => {
  return {
    archives: state.archives,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: filter => {
      dispatch(toggleFilter(filter));
    },
     changeView: view => {
      dispatch(changeView(view));
    },
  };
};

const ArchiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive);

export default ArchiveContainer;
