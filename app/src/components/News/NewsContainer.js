import { connect } from 'react-redux';
import News from './News';

const mapStateToProps = (state) => {
  return {
    instagram: state.instagram,
    features: state.features,
  };
};

const NewsContainer = connect(
  mapStateToProps
)(News);

export default NewsContainer;
