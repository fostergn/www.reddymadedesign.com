import React from 'react';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

const Sidebar = ({}) => {

  return (
		<footer className="sidebar__container">
			<ul className="sidebar__list">
				<li className="sidebar__list-item"><img src={facebook}/></li>
				<li className="sidebar__list-item"><img src={instagram}/></li>
				<li className="sidebar__list-item"><img src={linkedin}/></li>
			</ul>
		</footer>
  );
}

export default Sidebar;