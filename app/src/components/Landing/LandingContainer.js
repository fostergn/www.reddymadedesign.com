import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Landing from './Landing';

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings,
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

export default LandingContainer;
