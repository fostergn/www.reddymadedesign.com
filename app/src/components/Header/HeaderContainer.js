import { connect } from 'react-redux';
import Header from './Header';
import { updateQuadrant, mobileFilterOff, updateQuadrantMode, mobileFilterToggle, toggleFilterMenu, changeGridFilter, changeListFilter, changeWorkView, toggleMenu} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    workFilterOpen: state.workFilterOpen,
    workView: state.workView,
    gridFilter: state.gridFilter,
    listFilter: state.listFilter,
    menuOpen: state.menuOpen,
    about: state.about,
    isMobileFilterOpen: state.isMobileFilterOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilterMenu: () => {
      dispatch(toggleFilterMenu());
    },
    mobileFilterOff: () => {
      dispatch(mobileFilterOff());
    },
    mobileFilterToggle: () => {
      dispatch(mobileFilterToggle());
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
    updateQuadrant: (quadrant) => {
      dispatch(updateQuadrant(quadrant));
    },
    updateQuadrantMode: (mode) => {
      dispatch(updateQuadrantMode(mode));
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
