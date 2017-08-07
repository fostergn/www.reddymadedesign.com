import { connect } from 'react-redux';
import Header from './Header';
import { toggleFilterMenu, changeWorkFilter, changeWorkView} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    workFilterOpen: state.workFilterOpen,
    workView: state.workView,
    workFilter: state.workFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilterMenu: () => {
      dispatch(toggleFilterMenu());
    },
    changeWorkFilter: (filter) => {
      dispatch(changeWorkFilter(filter));
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
