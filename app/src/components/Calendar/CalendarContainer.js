import { connect } from 'react-redux';
import { toggleFilter, changeView, toggleFiltersVisibility, clearFilters } from '../../actions/actions';
import Calendar from './Calendar';

const mapStateToProps = (state) => {
  return {
    buildingsFilters: state.buildingsFilters,
    mapFilters: state.mapFilters,
    buildingsView: state.buildingsView,
    buildingsFiltersVisible: state.buildingsFiltersVisible,
    eventsFilters: state.eventsFilters,
    events: state.events,
    buildings: state.buildings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: (filter, type) => {
      dispatch(toggleFilter(filter, type));
    },
    changeView: view => {
      dispatch(changeView(view));
    },
    toggleFiltersVisibility: () => {
      dispatch(toggleFiltersVisibility());
    },
    clearFilters: () => {
      dispatch(clearFilters());
    },
  };
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default CalendarContainer;
