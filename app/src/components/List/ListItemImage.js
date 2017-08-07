import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const ListItemImage = ({project, workFilter}) => {

	const { name, primaryTag, secondaryTags, slug } = project;

	const allTags = [primaryTag, ...secondaryTags];
	const tags = allTags.join(', ');

	const listImageClass = classNames({
		'list__image-container': true,
		'list__image-container--inactive': !allTags.includes(workFilter) && workFilter !== 'all'
	})

  return (
		<Link to={`/work/${slug}`} className={listImageClass}>
			<img className="list__image" src={project.images[0]} />
		</Link>
  );
}

export default ListItemImage;
