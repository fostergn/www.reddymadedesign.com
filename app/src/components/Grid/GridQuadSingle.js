import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Single = ({ project }) => {

	const {title, images, work_image } = project.acf;

	const projectImage = typeof work_image != 'undefined' && work_image !== false ? work_image.sizes.large : images[0].image.sizes.large;

  return (
		<div className="quadrant__image">
			<Link style={{display:'block'}} to={`/work/${project.slug}`} className="quadrant__image-hover">
				<img src={projectImage}/>
				<div className="quadrant__image-title">{title}</div>
			</Link>
		</div>
  );
}

export default Single;
