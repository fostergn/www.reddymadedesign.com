import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const ListItem = ({project, listFilter}) => {

	const { title, primary_tag, secondary_tags } = project.acf;

	const allTags = [primary_tag, ...secondary_tags];
	const tags = allTags.join(', ');

	const listTextClass = classNames({
		'list__text-item': true,
		'list__text-item--inactive': !listFilter.every(tag => allTags.includes(tag)) && listFilter.length > 0
	})

  return (
		<Link to={`/work/${project.slug}`} className={listTextClass}>
			<div className="list__text-name">{title}</div>
			<div className="list__text-tags">{tags}</div>
		</Link>
  );
}

export default ListItem;
