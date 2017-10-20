import React from 'react';
import Sidebar from './Sidebar';
import FilterButton from './FilterButton';
import WorkFilters from './WorkFilters';
import MobileWorkFilters from './MobileWorkFilters';
import classNames from 'classnames';
import { Link } from 'react-router';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import hamburger from '../../images/hamburger.svg';

const Header = ({mobileFilterToggle, isMobileFilterOpen, about, path, updateQuadrant, updateQuadrantMode, toggleMenu, menuOpen, workFilterOpen, toggleFilterMenu, workView, changeGridFilter, changeListFilter, gridFilter, listFilter, changeWorkView}) => {

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

  const about_quote = about.length < 1 ? 'loading...' : <p className="header__mobile-quote">{about[0].acf.mobile_menu_quote}<span>&mdash; {about[0].acf.mobile_menu_quote_author}</span></p>

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
          <p onClick={() => toggleMenu()} className={mobileMenuCloseIconClass} style={{width:'auto', fontWeight:'bold', fontSize:20}}>X</p>
          <ul className={mobileMenuClass}>
            <ul>
              <li className={aboutClass}><Link to="/about">About</Link></li>
              <li className={workClass}><Link to="/work">Work</Link></li>
              <li className={newsClass}><Link to="/news">News</Link></li>
              {about_quote}
            </ul>
            <ul className="mobile__sidebar">
              <li className="sidebar__list-item"><a target="_blank" href="https://www.facebook.com/reddymadedesign/"><img src={facebook}/></a></li>
              <li className="sidebar__list-item"><a target="_blank" href="https://www.instagram.com/reddymadedesign/"><img src={instagram}/></a></li>
              <li className="sidebar__list-item"><a target="_blank" href="https://www.linkedin.com/company/2592637/"><img src={linkedin}/></a></li>
            </ul>
          </ul>
          {filterButton}
  			</nav>
        <WorkFilters updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode} changeWorkView={changeWorkView} path={path} workFilterOpen={workFilterOpen} listFilter={listFilter} gridFilter={gridFilter} workView={workView} changeListFilter={changeListFilter} changeGridFilter={changeGridFilter}/>
  		</div>
  		<Sidebar />
      <MobileWorkFilters mobileFilterToggle={mobileFilterToggle} isMobileFilterOpen={isMobileFilterOpen} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode} changeWorkView={changeWorkView} path={path} workFilterOpen={workFilterOpen} listFilter={listFilter} gridFilter={gridFilter} workView={workView} changeListFilter={changeListFilter} changeGridFilter={changeGridFilter}/>
	   </div>
  );
}

export default Header;
