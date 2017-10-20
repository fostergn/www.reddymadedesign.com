import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const ListItemImage = ({project, listFilter}) => {

	const { primary_tag, secondary_tags, images, work_image } = project.acf;

	const allTags = [primary_tag, ...secondary_tags];

	const listImageClass = classNames({
		'list__image-container': true,
		'list__text-item--inactive': !listFilter.every(tag => allTags.includes(tag)) && listFilter.length > 0
	})

const projectImage = typeof work_image != 'undefined' && work_image !== false ? work_image.sizes.large : images[0].image.sizes.large;

  return (
		<Link to={`/work/${project.slug}`} className={listImageClass}>
			<img className="list__image" src={projectImage} />
		</Link>
  );
}

export default ListItemImage;
