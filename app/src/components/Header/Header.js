import React from 'react';
import Sidebar from './Sidebar';
import FilterButton from './FilterButton';
import WorkFilters from './WorkFilters';
import classNames from 'classnames';
import { Link } from 'react-router';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import hamburger from '../../images/hamburger.svg';

const Header = ({path, toggleMenu, menuOpen, workFilterOpen, toggleFilterMenu, workView, changeGridFilter, changeListFilter, gridFilter, listFilter, changeWorkView}) => {

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

  const mobileMenuClass = classNames({
    'header__mobile-menu': true,
    'header__mobile-menu--active': menuOpen,
    'header__mobile-menu--inactive': !menuOpen,
  });

  const mobileMenuIconClass = classNames({
    'header__mobile-icon': true,
    'header__mobile-icon--inactive': menuOpen,
  });

  const mobileMenuCloseIconClass = classNames({
    'header__mobile-close-icon': true,
    'header__mobile-close-icon--inactive': !menuOpen,
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
        <div className="header__mobile-cover"></div>
        <img onClick={() => toggleMenu()} className={mobileMenuIconClass} style={{width:20}} src={hamburger}></img>
        <p onClick={() => toggleMenu()} className={mobileMenuCloseIconClass} style={{width:'auto'}}>close</p>
        <ul className={mobileMenuClass}>
          <ul>
            <li className={aboutClass}><Link to="/about">About</Link></li>
            <li className={workClass}><Link to="/work">Work</Link></li>
            <li className={newsClass}><Link to="/news">News</Link></li>
            <p className="header__mobile-quote">
              Integer mcomonorous volupat. Sed norril eleifend ipsum dolor toro tellus sprilltium lorum dolor isctap <br/>
              <span>&mdash; Suchi Reddy</span>
            </p>
          </ul>
          <ul className="mobile__sidebar">
            <li className="sidebar__list-item"><img src={facebook}/></li>
            <li className="sidebar__list-item"><img src={instagram}/></li>
            <li className="sidebar__list-item"><img src={linkedin}/></li>
          </ul>
        </ul>
        {filterButton}
			</nav>
      <WorkFilters changeWorkView={changeWorkView} path={path} workFilterOpen={workFilterOpen} listFilter={listFilter} gridFilter={gridFilter} workView={workView} changeListFilter={changeListFilter} changeGridFilter={changeGridFilter}/>
		</div>
		<Sidebar />
	</div>
  );
}

export default Header;
