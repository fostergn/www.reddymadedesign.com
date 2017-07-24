import { browserHistory } from 'react-router';

const sidebarRouter = (direction, location, e) => {
	e.preventDefault();

	const isHome = location === '/';
	const isSingle = location.includes('/calendar/october-');
	const isCalendar = location === '/calendar';
	const isAbout = location.includes('/about');
	const isExhibitions = location.includes('/exhibitions');
	const isArchive = location.includes('/archive');
	const isPartners = location.includes('/partners');
	const isBlog = location.includes('/blog');
	const isSponsors = location.includes('/sponsors');

	if(isAbout || isHome){
		direction === 'left' ? browserHistory.push('/blog') : browserHistory.push('/calendar'); 
	}
	else if(isExhibitions){
		direction === 'left' ? browserHistory.push('/calendar') : browserHistory.push('/archive'); 
	}
	else if(isArchive){
		direction === 'left' ? browserHistory.push('/exhibitions') : browserHistory.push('/partners'); 
	}
	else if(isPartners){
		direction === 'left' ? browserHistory.push('/archive') : browserHistory.push('/sponsors'); 
	}
	else if(isBlog){
		direction === 'left' ? browserHistory.push('/sponsors') : browserHistory.push('/about'); 
	}
	else if(isSponsors){
		direction === 'left' ? browserHistory.push('/partners') : browserHistory.push('/blog'); 
	}
	else if(isSingle){
		// get day
		let day = parseInt(location.replace('/calendar/october-', ''), 10);

		let prevDay;
		let nextDay;
		if(day > 1) {prevDay = day - 1;} else {prevDay = 31}
		if(day < 31) {nextDay = day + 1;} else {nextDay = 1}
		if(nextDay < 10){nextDay = `0${nextDay}`}
		if(prevDay < 10){prevDay = `0${prevDay}`}

		direction === 'left' ? browserHistory.push(`/calendar/october-${prevDay}`) : browserHistory.push(`/calendar/october-${nextDay}`); 
	}
	else if(isCalendar){
		direction === 'left' ? browserHistory.push('/about') : browserHistory.push('/exhibitions'); 
	}
}

export function sidebarText(location){
	const isHome = location === '/';
	const isSingle = location.includes('calendar/october-');
	const isCalendar = location === '/calendar' || location === '/calendar/';
	const isAbout = location.includes('/about');
	const isExhibitions = location.includes('/exhibitions');
	const isArchive = location.includes('/archive');
	const isPartners = location.includes('/partners');
	const isBlog = location.includes('/blog');
	const isSponsors = location.includes('/sponsors');

	if(isAbout || isHome){
		return {
			left: 'Blog',
			right: 'Calendar',
		} 
	}
	else if(isExhibitions){
		return {
			left: 'Calendar',
			right: 'Archive',
		} 
	}
	else if(isArchive){
		return {
			left: 'Exhibitions',
			right: 'Partners',
		} 
	}
	else if(isPartners){
		return {
			left: 'Archive',
			right: 'Sponsors',
		} 
	}
	else if(isBlog){
		return {
			left: 'Sponsors',
			right: 'About',
		} 
	}
	else if(isSponsors){
		return {
			left: 'Partners',
			right: 'Blog',
		} 
	}
	else if(isSingle){
		// get day
		let day = parseInt(location.replace('/calendar/october-', ''), 10);

		let prevDay;
		let nextDay;
		if(day > 1) {prevDay = day - 1;} else {prevDay = 31}
		if(day < 31) {nextDay = day + 1;} else {nextDay = 1}
		if(nextDay < 10){nextDay = `0${nextDay}`}
		if(prevDay < 10){prevDay = `0${prevDay}`}

		return {
			left: `October ${prevDay}`,
			right: `October ${nextDay}`,
		} 
	}
	else if(isCalendar){
		return {
			left: 'About',
			right: 'Exhibitions',
		}	
	} else {
		return {
			left: 'About',
			right: 'Exhibitions',
		} 
	}	
}

export default sidebarRouter