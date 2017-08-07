import React from 'react';
import Sidebar from './Sidebar';
import FilterButton from './FilterButton';
import WorkFilters from './WorkFilters';
import classNames from 'classnames';
import { Link } from 'react-router';

const Header = ({path, workFilterOpen, toggleFilterMenu, workView, changeWorkFilter, workFilter, changeWorkView}) => {

	const isActive = (location, name) => location.includes(name);

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

  const filterButton = ['/work', 'work', 'list'].includes(path) ? <FilterButton toggleFilterMenu={toggleFilterMenu} workFilterOpen={workFilterOpen}/> : '';

  return (
  	<div>
		<div className="header__container">
			<h1 className="header__title"><Link to="/">Reddymade</Link></h1>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className={aboutClass}><Link to="/about">About</Link></li>
					<li className={workClass}><Link to="/work">Work</Link></li>
					<li className={newsClass}><Link to="/news">News</Link></li>
				</ul>
        {filterButton}
			</nav>
      <WorkFilters changeWorkView={changeWorkView} path={path} workFilterOpen={workFilterOpen} workFilter={workFilter} workView={workView} changeWorkFilter={changeWorkFilter}/>
		</div>
		<Sidebar />
	</div>
  );
}

export default Header;
