import React from 'react';
import Sidebar from './Sidebar';

const Header = ({}) => {

  return (
  	<div>
		<div className="header__container">
			<h1 className="header__title">Reddymade</h1>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className="header__nav-list-item">About</li>
					<li className="header__nav-list-item header__nav-list-item--active">Work</li>
					<li className="header__nav-list-item">News</li>
				</ul>
			</nav>
		</div>
		<Sidebar />
	</div>
  );
}

export default Header;
