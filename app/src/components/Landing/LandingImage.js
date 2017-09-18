import React from 'react';
import Image4 from '../../images/4.jpg';
import { Link } from 'react-router';

const LandingImage = ({ index, image, link }) => {

  return (
	<Link to={`/work/${link}`} className={`quadrant__single quadrant__single--${index} quadrant__single--landing quadrant__single--image`}>
		<img src={image.sizes.large}/>
	</Link>
  );
}

export default LandingImage;
