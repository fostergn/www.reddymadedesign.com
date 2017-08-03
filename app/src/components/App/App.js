import React from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';
import classNames from 'classnames';

const App = ({children}) => {

  const gradientTopClass = classNames({
    'gradient__hover--top': true,
  });

  return (
    <div>
    	<Header />
    	<main>
    		{children}
    	</main>
    </div>
  );
}

export default App;
