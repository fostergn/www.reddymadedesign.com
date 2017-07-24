import React from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/Footer';
import LeftNav from '../Header/LeftNav';
import RightNav from '../Header/RightNav';
import { Link } from 'react-router';
import classNames from 'classnames';
import SidebarRouter from '../Header/Router';

const App = ({children, location, isNavOpen}) => {

  const gradientTopClass = classNames({
    'gradient__hover--top': true,
    'gradient__hover--active': isNavOpen,
  })

  console.log('is nav open: ', isNavOpen);

  return (
    <div className="gradient__wrapper">
      <Link onClick={(e) => SidebarRouter('left', window.location.pathname, e)} href="#" className="gradient__hover--left" />
      <div className={gradientTopClass}></div>
      <Link onClick={(e) => SidebarRouter('right', window.location.pathname, e)} href="#" className="gradient__hover--right"/>
      <div className="gradient__hover--bottom"></div>
      <Header location={location.pathname} />
      <Footer />
      <LeftNav location={location.pathname} />
      <RightNav location={location.pathname} />
      <div className="gradient">
        <div className="gradient__frame--before"></div>
        <div className="gradient__frame--after"></div>
        <div className="gradient__content">
          <div style={{paddingBottom: 36}}>
            {children}
          </div>
        </div>
      </div>
    </div>	
  );
}

export default App;
