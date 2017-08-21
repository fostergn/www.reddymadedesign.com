import { connect } from 'react-redux';
import About from './About';

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

const AboutContainer = connect(
  mapStateToProps
)(About);

export default AboutContainer;
