import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Single = ({ project }) => {

	const {slug, title, images } = project.acf;

	const projectImage = images[0].image.sizes.large;

  return (
		<Link to={`/${slug}`} className="quadrant__image"><div className="quadrant__image-hover"><div className="quadrant__image-title">{title}</div><img src={projectImage}/></div></Link>
  );
}

export default Single;
