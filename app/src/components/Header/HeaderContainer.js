import { connect } from 'react-redux';
import Header from './Header';
import { toggleFilterMenu, changeGridFilter, changeListFilter, changeWorkView, toggleMenu} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    workFilterOpen: state.workFilterOpen,
    workView: state.workView,
    gridFilter: state.gridFilter,
    listFilter: state.listFilter,
    menuOpen: state.menuOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilterMenu: () => {
      dispatch(toggleFilterMenu());
    },
    toggleMenu: () => {
      dispatch(toggleMenu());
    },
    changeGridFilter: (filter) => {
      dispatch(changeGridFilter(filter));
    },
    changeListFilter: (filter) => {
      dispatch(changeListFilter(filter));
    },
    changeWorkView: (view) => {
      dispatch(changeWorkView(view));
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
