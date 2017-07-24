import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings,
  };
};

const HeaderContainer = connect(
  mapStateToProps,
)(Header);

export default HeaderContainer;
