import { connect } from 'react-redux';
import Single from './Single';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const SingleContainer = connect(
  mapStateToProps
)(Single);

export default SingleContainer;
