import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Single from './Single';

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings,
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const SingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default SingleContainer;
