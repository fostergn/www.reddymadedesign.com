import React from 'react';
import { Link } from 'react-router';

const Footer = () =>  {

  return (
    <footer className="main-nav__wrapper main-nav__wrapper--footer">
      <ul className="main-nav__list main-nav__list--footer">
        <li className="main-nav__list-item"><a target="_blank" href="https://www.instagram.com/archtober/">Instagram</a></li>
        <li className="main-nav__list-item"><a target="_blank" href="https://twitter.com/Archtober/">Facebook</a></li>
        <li className="main-nav__list-item main-nav__list-item--break"><a target="_blank" href="https://www.facebook.com/Archtober/">Twitter</a></li>
        <li className="main-nav__list-item"><a target="_blank" href="http://portal.criticalimpact.com/sup.cfm?fid=4c9420853d5d6a31">Subscribe</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
