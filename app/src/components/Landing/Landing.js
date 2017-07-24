import React from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/LogoLanding';
import Content from './LandingContent';
import Loading from '../Loading/Loading';
import BackgroundImage from './LandingBGImage';
const moment = require('moment');

const Landing = ({ buildings, events }) => {
	if(buildings.length === 0 || events.length === 0) { return (<Loading />)}
	
	// get current day
	const date = moment('10-1-2017', 'MM-DD-YYYY').format('dddd MMMM DD');
	const day = moment('10-1-2017', 'MM-DD-YYYY').format('DD');

	// get BUILDING OF THE DAY
	const buildingOfTheDay = buildings.find(building => building.acf.day_of_the_month == day);
	// get EVENTS toggled as true || 5 ?

	const toggledEvents = events.filter(event => event.acf.show_on_homepage);

	const content = <Content building={buildingOfTheDay} events={toggledEvents}  date={date} day={day} />
	const backgroundImage = (buildings.length > 0 && events.length > 0) ? <BackgroundImage buildingOfTheDay={buildingOfTheDay}/> : '';

	return (
		<div>
			<Logo header={`October 01`}/>
			{backgroundImage}
			{content}
		</div>
	)
}

export default Landing;
