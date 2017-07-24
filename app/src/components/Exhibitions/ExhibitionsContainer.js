import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Exhibitions from './Exhibitions';

const mapStateToProps = (state) => {
  return {
    exhibitions: state.exhibitions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const ExhibitionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Exhibitions);

export default ExhibitionsContainer;
