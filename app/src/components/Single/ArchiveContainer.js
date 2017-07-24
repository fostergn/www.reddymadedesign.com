import { connect } from 'react-redux';
import { toggleSetting } from '../../actions/actions';
import ArchiveSingle from './ArchiveSingle';

const mapStateToProps = (state) => {
  return {
    archives: state.archives
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: () => {
      dispatch(toggleSetting());
    },
  };
};

const ArchiveSingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchiveSingle);

export default ArchiveSingleContainer;
