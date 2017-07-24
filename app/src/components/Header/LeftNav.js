import React from 'react';
import { sidebarText } from './Router';

const LeftNav = ({ location }) =>  {
  const { left } = sidebarText(location);

  return (
    <div className="sidebar-nav sidebar-nav--left">
      <div className="sidebar-nav__content-wrapper">
        <p className="sidebar-nav__content">{left}</p>
      </div>
    </div>
  );
}

export default LeftNav;
