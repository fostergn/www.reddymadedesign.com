import React from 'react';
import Sidebar from './Sidebar';
import classNames from 'classnames';
import { Link } from 'react-router';

const Header = ({path}) => {

	const isActive = (location, name) => location === name;

  const aboutClass = classNames({
    'header__nav-list-item': true,
    'header__nav-list-item--active': isActive(path, 'about'),
  });

  const workClass = classNames({
    'header__nav-list-item': true,
    'header__nav-list-item--active': isActive(path, 'work'),
  });

  const newsClass = classNames({
    'header__nav-list-item': true,
    'header__nav-list-item--active': isActive(path, 'news'),
  });

  return (
  	<div>
		<div className="header__container">
			<h1 className="header__title"><Link to="/">Reddymade</Link></h1>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className={aboutClass}><Link to="about">About</Link></li>
					<li className={workClass}><Link to="work">Work</Link></li>
					<li className={newsClass}><Link to="news">News</Link></li>
				</ul>
			</nav>
		</div>
		<Sidebar />
	</div>
  );
}

export default Header;
