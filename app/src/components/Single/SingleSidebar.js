import React from 'react';
const moment = require('moment');

const Sidebar = ({ date, time, address, archive }) => {

	const ticketCTA = archive !== true ? <a href="https://web.ovationtix.com/trs/pe.c/10116725" className="yellow">Buy Tickets</a> : '';

	return (
		<aside className="sidebar__wrapper">
			<p>
				{moment(date, 'DD/MM/YYYY').format('dddd')} <br/>
				{moment(date, 'DD/MM/YYYY').format('MMMM DD')} <br/>
				{time}
			</p>
			<p>{address}</p>
			{ticketCTA}
		</aside>
	)
}

export default Sidebar;
