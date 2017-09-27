import React from 'react';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

const Sidebar = ({}) => {

  return (
		<footer className="sidebar__container">
			<ul className="sidebar__list">
				<li className="sidebar__list-item"><a target="_blank" href="https://www.facebook.com/reddymadedesign/"><img src={facebook}/></a></li>
				<li className="sidebar__list-item"><a target="_blank" href="https://www.instagram.com/reddymadedesign/"><img src={instagram}/></a></li>
				<li className="sidebar__list-item"><a target="_blank" href="https://www.linkedin.com/company/2592637/"><img src={linkedin}/></a></li>
			</ul>
		</footer>
  );
}

export default Sidebar;