import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'
import kern from './Kerning';
const moment = require('moment');

const CalendarSingle = ({ building, filteredBuildings, position }) => {
	const { day_of_the_month, images} = building.acf;

	const singleClass = classNames({
		'calendar-grid__block': true,
	})

	const numberClass = classNames({
		'calendar-grid__content' : true,
		'calendar-grid__content--transparent': moment(`10/${day_of_the_month}/2017`).isBefore()
	})

	const kernStyle = kern(day_of_the_month)

	const thumbnail = images[0].image.sizes.thumbnail;

	return (
		<Link to={`calendar/october-${day_of_the_month}`} className={singleClass}>
			<div className="calendar-grid__day-image" style={{backgroundImage: `url(${thumbnail})`}}></div>
			<div className={numberClass}>
				<span className="calendar-grid__number" style={kernStyle}>
					{day_of_the_month}
				</span>
			</div>
		</Link>
	)
}

export default CalendarSingle;