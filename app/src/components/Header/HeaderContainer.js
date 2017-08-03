import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;
