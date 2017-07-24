import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import kern from './Kerning';

const BuildingsSingle = ({ building, filteredBuildings, position }) => {
	const { day_of_the_month, images} = building.acf;

	const singleClass = classNames({
		// 'col-1-sev' : true,
		'calendar-grid__block': true,
		'calendar-grid__block--building': true,
		'calendar-grid--invisible' : filteredBuildings.indexOf(building) === -1,
		// 'col-not-last' : position !== 6
	})

	const thumbnail = images[0].image.sizes.thumbnail;

	const kernStyle = kern(day_of_the_month)

	return (
		<Link to={`calendar/october-${day_of_the_month}`} className={singleClass}>
			<div className="calendar-grid__day-image" style={{backgroundImage: `url(${thumbnail})`}}></div>
			<div className="calendar-grid__content calendar-grid__content--image">
				<span className="calendar-grid__number" style={kernStyle}>
					{day_of_the_month}
				</span>
			</div>
		</Link>
	)
}

export default BuildingsSingle;