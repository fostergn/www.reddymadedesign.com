import React from 'react';
import { Link } from 'react-router';
import kern from './Views/Kerning';
import classNames from 'classnames'

const BuildingsSingle = ({ building, filteredBuildings, position }) => {
	const { day_of_the_month, images} = building.acf;

	const singleClass = classNames({
		'calendar-grid__block': true,
		'calendar-grid__block--building': true
	})

	const thumbnail = images[0].image.sizes.thumbnail;

	const kernStyle = kern(day_of_the_month)

	return (
		<Link to={`archive/2016/october-${day_of_the_month}`} className={singleClass}>
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