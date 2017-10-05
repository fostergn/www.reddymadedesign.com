import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const ListItemImage = ({project, listFilter}) => {

	const { primary_tag, secondary_tags, images } = project.acf;

	const allTags = [primary_tag, ...secondary_tags];

	const listImageClass = classNames({
		'list__image-container': true,
		'list__text-item--inactive': !listFilter.every(tag => allTags.includes(tag)) && listFilter.length > 0
	})

  return (
		<Link to={`/work/${project.slug}`} className={listImageClass}>
			<img className="list__image" src={images[0].image.sizes.medium} />
		</Link>
  );
}

export default ListItemImage;
