import React from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';

const App = ({children, location}) => {

  return (
    <div>
    	<Header path={location.pathname} />
    	<main>
    		{children}
    	</main>
    </div>
  );
}

export default App;
