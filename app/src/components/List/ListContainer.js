import { connect } from 'react-redux';
import List from './List';
// import { toggleFilterMenu, changeGridFilter, changeListFilter, changeWorkView, toggleMenu} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
    projects: state.projects,
    listFilter: state.listFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
