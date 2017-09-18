import React from 'react';
import { Link } from 'react-router';

const LandingQuote = ({ index, quote, link }) => {

  return (
	<Link to={`/work/${link}`} className={`quadrant__single quadrant__single--${index} quadrant__single--landing quadrant__single--quote`}>
		<p className="quadrant__quote">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			<p className="read-more">Read More</p>
		</p>
	</Link>
  );
}

export default LandingQuote;
