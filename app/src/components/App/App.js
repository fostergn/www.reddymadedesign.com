import React from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';
import Loading from '../Loading/Loading';

const App = ({children, location, hasLoaded}) => {

  return (
    <div>
    	<Header path={location.pathname} />
    	<main>
    		<Loading hasLoaded={hasLoaded} />
    		{children}
    	</main>
    </div>
  );
}

export default App;
