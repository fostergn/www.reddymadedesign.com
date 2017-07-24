import React from 'react';

const FilterView = ({ changeView, currentView }) => {
	return (
		<ul className="right-filters__wrapper">
			<li className={currentView === 'calendar' ? 'isActive' : ''} onClick={() => changeView('calendar')}>Calendar</li>
			<li className={currentView === 'buildings' ? 'isActive' : ''} onClick={() => changeView('buildings')}>Buildings</li>
			<li className={currentView === 'events' ? 'isActive' : ''} onClick={() => changeView('events')}>Events</li>
			<li className={currentView === 'map' ? 'isActive' : ''} onClick={() => changeView('map')}>Map</li>
		</ul>
	)
}

export default FilterView;