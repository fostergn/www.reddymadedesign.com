import React from 'react';
import LandingQuote from './LandingQuote';
import LandingImage from './LandingImage';

const Landing = ({landing}) => {

	if(landing.length < 1) { return <div>landing...</div> }

	const landing_fields = landing[0].acf;

	const quadrants = ['quadrant_1', 'quadrant_2', 'quadrant_3', 'quadrant_4'];

	const landing_quadrants = quadrants.map((quad, index) => {

		const link = landing_fields[`link_${index + 1}`].post_name

		return landing_fields[quad] === 'quote' ? <LandingQuote index={index + 1} quote={landing_fields[`quote_${index + 1}`]} link={link} /> : <LandingImage index={index + 1} image={landing_fields[`image_${index + 1}`]} link={link} />
	});

  return (
	<div className="quadrant__container quadrant__container--landing">
		{landing_quadrants}
	</div>
  );
}

export default Landing;
