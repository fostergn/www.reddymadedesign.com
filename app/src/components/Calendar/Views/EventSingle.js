import React from 'react';

const Events = ({ event, classStyle }) => {
	const { description, info_register_link, location, time } = event.acf;
	return (
		<div className={`card__wrapper ${classStyle}`}>
			<header className="card__header">
				<h3 className="card__title" dangerouslySetInnerHTML={{__html: event.title.rendered}}></h3>
				<div className="card__details">
					<p>{location}</p>
					<p>{time}</p>
				</div>
			</header>
			<a className="yellow card__cta" href={info_register_link}>More Info + Register</a>
			<p className="card__content" dangerouslySetInnerHTML={{__html: description}}></p>
		</div>
	)
}

export default Events;