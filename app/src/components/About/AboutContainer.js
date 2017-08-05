import { connect } from 'react-redux';
import About from './About';

const mapStateToProps = (state) => {
  return {
    // isNavOpen: state.isNavOpen,
  };
};

const AboutContainer = connect(
  mapStateToProps
)(About);

export default AboutContainer;
