import { connect } from 'react-redux';
import { mapLoaded } from '../../actions/actions';
import Map from './Map';

const mapStateToProps = (state) => {
  return {
    isMapLoaded: state.isMapLoaded,
    mapFilters: state.mapFilters,
    buildings: state.buildings,
    partners: state.partners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mapLoaded: () => {
      dispatch(mapLoaded());
    },
  };
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
