import React from 'react';
import { Link } from 'react-router';
import ArrowSVG from '../../images/back-arrow.svg';

const SinglePrevNext = ({ day }) => {

	let dayInt = parseInt(day, 10);
	let prevDay;
	let nextDay;
	if(dayInt > 1) {prevDay = dayInt - 1;} else {prevDay = 31}
	if(dayInt < 31) {nextDay = dayInt + 1;} else {nextDay = 1}
	if(nextDay < 10){nextDay = `0${nextDay}`}
	if(prevDay < 10){prevDay = `0${prevDay}`}

	return (
		<div className="single__nav-days">
			<Link className="single-nav__date" to={`/calendar/october-${prevDay}`}><img  className="single-nav__arrow" style={{paddingRight: 4, width: 16, height: 18}} src={ArrowSVG} />{`October ${prevDay}`}</Link>
			<Link className="single-nav__date" to={`/calendar/october-${nextDay}`}>{`October ${nextDay}`}<img className="single-nav__arrow" style={{paddingRight: 4, width: 16, height: 18, transform: 'rotate(180deg)'}} src={ArrowSVG} /></Link>
		</div>
	)
}

export default SinglePrevNext;
