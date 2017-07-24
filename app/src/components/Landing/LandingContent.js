import React from 'react';
import { Link } from 'react-router';

const Content = ({ date, building, events, day }) => {
	const link = `calendar/october-${day}?event=true`;

	let displayImage = (display) => {
		document.getElementById('landing-image').style.display = (display === 'show' ? 'grid' : 'none');
	}
	
	// split sentences
	const eventTaglines = events.map((event, i, array) => (
		<span>{ i > 0 ? ( i === array.length - 1 ? ', and '  :  ', ' ) : ''}
			<Link to={link}>{event.acf.tagline_activity}</Link> at the <Link to={link}> 
				<span 
					className="landing-content--bold">
						{event.acf.location}
				</span>
			</Link>
		</span>
		)
	);
	
	return (
		<div className="grid grid--landing">
			<p className="landing-content">
				Today is <Link to={link}>
				<span onMouseEnter={() => {displayImage('show')}} onMouseLeave={() => {displayImage('hide')}}className="landing-content--bold">{date}</span></Link>. The Building of the Day is <Link to={link}>
				<span className="landing-content--bold">{building.acf.building_of_the_day_title}</span></Link>. Events today include {eventTaglines}
			</p>
		</div>
	)
}

export default Content;
