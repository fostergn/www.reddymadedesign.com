import React from 'react';
import LandingQuote from './LandingQuote';
import LandingImage from './LandingImage';
// import Loading from '../Loading/Loading';

const Landing = ({hasLoaded, markLoaded, landing, projects, features}) => {

	if(landing.length < 1) { return <div></div> }

	if (!hasLoaded) {markLoaded()}

	const landing_fields = landing[0].acf;

	const quadrants = ['quadrant_1', 'quadrant_2', 'quadrant_3', 'quadrant_4'];

	const landing_quadrants = quadrants.map((quad, index) => {

		return landing_fields[quad] === 'quotes' ? <LandingQuote index={index + 1} features={features} quotes={landing_fields[`news_${index + 1}`]} /> : <LandingImage index={index + 1} projects={projects} project={landing_fields[`project_${index + 1}`]} projectQuote={landing_fields[`project_quote_${index + 1}`]} />
	});

  return (
	<div className="quadrant__container quadrant__container--landing">
		{landing_quadrants}
	</div>
  );
}

export default Landing;
