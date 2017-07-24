import React from 'react';
import { Link } from 'react-router';
import Aside from './Aside';

const Header = ({ location, buildings }) =>  {

  const isActiveClass = path => (location.includes(path) ? 'isActive' : '');

  return (
    <nav className="main-nav__wrapper main-nav__wrapper--header grid">
      <ul className="main-nav__list">
        <li className={`main-nav__list-item ${isActiveClass('about')}`}><Link to="/about">About</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('calendar')}`}><Link to="/calendar">Calendar</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('exhibitions')}`}><Link to="/exhibitions">Exhibitions</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('archive')}`}><Link to="/archive">Archive</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('partners')}`}><Link to="/partners">Partners</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('sponsors')}`}><Link to="/sponsors">Sponsors</Link></li>
        <li className={`main-nav__list-item ${isActiveClass('blog')}`}><Link to="/blog">Blog</Link></li>
      </ul>
      <Aside buildings={buildings}/>
    </nav>
  );
}

export default Header;
