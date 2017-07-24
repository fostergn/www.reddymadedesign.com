import React from 'react';
import EventSingle from './EventSingle';

const Events = ({ filteredEvents }) => {
	const eventList = filteredEvents.map(event => <EventSingle classStyle="card__wrapper--calendar" key={event.title.rendered} event={event} />)
	return (
		<div className="cards__container cards__container--calendar">
			{eventList}
		</div>
	)
}

export default Events;