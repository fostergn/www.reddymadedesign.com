import React from 'react';
import StaffListing from './StaffListing';

const Staff = ({staff}) => {

	const staffList = staff.map(member => <StaffListing member={member} />)

  return (
	<article className="about-content__article">
		<header className="about-content__header">Staff</header>
		{staffList}
	</article>
  );
}

export default Staff;
