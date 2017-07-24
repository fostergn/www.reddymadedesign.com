import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import About from './About';

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default AboutContainer;
