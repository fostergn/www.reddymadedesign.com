import React from 'react';
import FilterTagsList from './Navigation/FilterTagsList';
import FilterView from './Navigation/FilterView';
import CalendarView from './Views/CalendarView';
import BuildingsView from './Views/BuildingsView';
import EventsView from './Views/EventsView';
import Map from '../Map/MapContainer';
import NoResults from './NoResults';
import Loading from '../Loading/Loading';
import Logo from '../Logo/Logo';

const Calendar = ({ toggleFilter, buildings, events, eventsFilters, changeView, buildingsFilters,  buildingsView, toggleFiltersVisibility, buildingsFiltersVisible, clearFilters, mapFilters }) => {
	// return loading if no data
		if(buildings.length === 0 || events.length === 0) { return (<Loading/>)}
	
	// filter buildings to include those with all the filter tags
	const filteredBuildings = buildings
		.map( building => buildingsFilters
			.every(tag => building.acf.tags.indexOf(tag) !== -1) ? building : false)
		.filter(building => building !== false)
		// .sort((a, b) => parseInt(a.acf.day_of_the_month, 10) - parseInt(b.acf.day_of_the_month, 10));

	const filteredEvents = events
		.map( event => eventsFilters
			.every(tag => event.acf.tags.indexOf(tag) !== -1) ? event : false)
		.filter(event => event !== false);

	const views = {
		buildings: <BuildingsView buildings={buildings} filteredBuildings={filteredBuildings}/>,
		calendar: <CalendarView buildings={buildings} filteredBuildings={filteredBuildings}/>,
		events: <EventsView filteredEvents={filteredEvents}/>,
	}
	
	const buildingContent = (buildingsView === 'buildings' && filteredBuildings.length > 0) || (buildingsView === 'events' && filteredEvents.length > 0) || buildingsView === 'calendar' || buildingsView === 'map'  ? views[buildingsView] : <NoResults clearFilters={clearFilters} />

	return (
		<div className={`overflow overflow--${buildingsView}`}>
			<Logo />
			<div className="filters__container">
				<FilterTagsList 
					buildingsFilters={buildingsFilters}
					toggleFilter={toggleFilter} 
					toggleFiltersVisibility={toggleFiltersVisibility} 
					buildingsFiltersVisible={buildingsFiltersVisible}
					buildingsView= {buildingsView}
					mapFilters={mapFilters}
					eventsFilters={eventsFilters}
				/>
				<FilterView changeView={changeView} currentView={buildingsView}/>
			</div>
			{buildingContent}
			<Map buildingsView={buildingsView} filteredBuildings={filteredBuildings}/>
		</div>
	)
}

export default Calendar;