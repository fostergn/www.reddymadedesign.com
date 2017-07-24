import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import Partners from './Partners';

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const PartnersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Partners);

export default PartnersContainer;
