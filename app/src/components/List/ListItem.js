import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const ListItem = ({project, workFilter}) => {

	const { name, primaryTag, secondaryTags, slug } = project;

	const allTags = [primaryTag, ...secondaryTags];
	const tags = allTags.join(', ');

	const listTextClass = classNames({
		'list__text-item': true,
		'list__text-item--inactive': !allTags.includes(workFilter) && workFilter !== 'all'
	})

  return (
		<Link to={`/work/${slug}`} className={listTextClass}>
			<div className="list__text-name">{name}</div>
			<div className="list__text-tags">{tags}</div>
		</Link>
  );
}

export default ListItem;
