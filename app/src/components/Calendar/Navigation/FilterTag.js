import React from 'react';

const FilterTag = ({ tag, type, toggleFilter, filters }) => {
	const { name, pretty } = tag;
	const isActive = filters.indexOf(name) !== -1 ? 'tag--active' : '';
	return (
		<li className={`${isActive} filter--${name}`} key={name} onClick={() => toggleFilter(name, type)}>{pretty}</li>
	)
}

export default FilterTag;