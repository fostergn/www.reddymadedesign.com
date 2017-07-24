import React from 'react';
import { sidebarText } from './Router';

const RightNav = ({ location }) =>  {
  const { right } = sidebarText(location);

  return (
    <div className="sidebar-nav sidebar-nav--right">
      <div className="sidebar-nav__content-wrapper">
        <p className="sidebar-nav__content">{right}</p>
      </div>
    </div>
  );
}

export default RightNav;
