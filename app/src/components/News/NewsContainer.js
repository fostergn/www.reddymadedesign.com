import { connect } from 'react-redux';
import News from './News';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const NewsContainer = connect(
  mapStateToProps
)(News);

export default NewsContainer;
