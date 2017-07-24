import React from 'react';
import Logo from '../Logo/Logo';

const Loading = ({children, location}) => {

  return (
		<div>
			<h1 className="title__header">Archtober</h1>
      <div className="grid grid--landing">
        <p className="landing-content">
          <span className="landing-content--bold">Archtober</span> (ärk’tōbər) is New York City’s <span className="landing-content--bold">Architecture</span> and <span className="landing-content--bold">Design</span> Month, the annual festival of architecture tours, lectures, films, and exhibitions taking place during October. 
        </p>
      </div>
		</div>    
  );
}

export default Loading;
