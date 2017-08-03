import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const ListContainer = connect(
  mapStateToProps
)(List);

export default ListContainer;
