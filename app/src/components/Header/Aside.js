import React from 'react';
import LoadingAside from './LoadingAside';
const moment = require('moment');

const Aside = ({ location, buildings }) =>  {
	if (buildings.length < 1){ return <LoadingAside/>}

	const day = moment('10-1-2017', 'MM-DD-YYYY').format('DD');
	const buildingOfTheDay = buildings.find(building => building.acf.day_of_the_month == day);
	const buildingOfTomorrow = buildings.find(building => parseInt(building.acf.day_of_the_month, 10) == (parseInt(day, 10) + 1));

	if (typeof buildingOfTheDay === 'undefined' || typeof buildingOfTomorrow === 'undefined'){ return <LoadingAside/>}

	const todayBuildingTitle = buildingOfTheDay.acf.building_of_the_day_title;
	const todayBuildingArchitect = buildingOfTheDay.acf.architect;
	const todayBuildingDate = buildingOfTheDay.acf.date;
	const todayStartTime = moment(todayBuildingDate).format('ha');
	const hoursSinceToday = moment(todayBuildingDate, 'DD/MM/YYYY h a').fromNow();

	const tomorrowBuildingTitle = buildingOfTomorrow.acf.building_of_the_day_title;
	const tomorrowBuildingArchitect = buildingOfTomorrow.acf.architect;
	const tomorrowBuildingDate = buildingOfTomorrow.acf.date;
	const tomorrowStartTime = moment(tomorrowBuildingDate).format('ha');
	const hoursTillTomorrow = moment(tomorrowBuildingDate, 'DD/MM/YYYY h a').fromNow();

	const operand = moment(todayBuildingDate, 'DD/MM/YYYY h a').isAfter() ? 'will happen' : 'happened'

  return (
		<p className="main-nav__aside">
			The building of the day is <em>{todayBuildingTitle}</em> by <em>{todayBuildingArchitect}.</em> The tour {operand} {hoursSinceToday} at {todayStartTime}. The next tour will start in {hoursTillTomorrow} at {tomorrowStartTime}, the building is <em>{tomorrowBuildingTitle}</em> by <em>{tomorrowBuildingArchitect}</em>.
		</p>
  );
}

export default Aside;
