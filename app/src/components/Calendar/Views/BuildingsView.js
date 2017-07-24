import React from 'react';
import BuildingsSingle from './BuildingsSingle';

const Buildings = ({ filteredBuildings, buildings }) => {
	const buildingsList = buildings
		.sort((a, b) => parseInt(a.acf.day_of_the_month, 10) - parseInt(b.acf.day_of_the_month, 10))
		.map((building, index) => <BuildingsSingle key={building.title.rendered} position={index} filteredBuildings={filteredBuildings} building={building} />)
		
	return (
		<div className="calendar-grid__container">
			{buildingsList}
		</div>
	)
}

export default Buildings;