import React from 'react';
import classNames from 'classnames';

const WorkFilters = ({updateQuadrant, updateQuadrantMode, path, workFilterOpen, workView, changeWorkView, changeGridFilter, changeListFilter, gridFilter, listFilter}) => {

	const filterContainerClass = classNames({
		'work-filters__container': true,
		'work-filters__container--active': workFilterOpen && ['/work', 'work', 'list'].includes(path)
	});

	const gridClass = classNames({
		'work-filters__view-item': true,
		'work-filters__view-item--active': workView === 'grid'
	});

	const listClass = classNames({
		'work-filters__view-item': true,
		'work-filters__view-item--active': workView === 'list'
	});

	const filterClass = (filter) => {

		const isWorkFilterActive = workView === 'grid' ? gridFilter === filter : ( (filter === 'all' && listFilter.length === 0) ? true : listFilter.includes(filter))

		return classNames({
			'work-filters__list-item': true,
			'work-filters__list-item--active': isWorkFilterActive
		});
	}

	const handleClick = (filter, view) => {
		if (view === 'grid') {
			changeGridFilter(filter);
			updateQuadrantMode('click');
			updateQuadrant(filter);

		} else {
			// list view
			changeListFilter(filter)

		}
	}

  return (
        <div className={filterContainerClass}>
        	<div className="work-filters__view">
        		<div className={gridClass} onClick={() => changeWorkView('grid')}>Grid</div>
        		&nbsp;/&nbsp;
        		<div className={listClass} onClick={() => changeWorkView('list')}>List</div>
        	</div>
        	<ul className="work-filters__list">
        		<li onClick={() => handleClick('all', workView)} className={filterClass('all')}>All</li>
        		<li onClick={() => handleClick('architecture', workView)} className={filterClass('architecture')}>Architecture</li>
        		<li onClick={() => handleClick('products', workView)} className={filterClass('products')}>Products</li>
        		<li onClick={() => handleClick('collaborations', workView)} className={filterClass('collaborations')}>Collaborations</li>
        		<li onClick={() => handleClick('interior', workView)} className={filterClass('interior')}>Interior Design</li>
        	</ul>
        </div>
  );
}

export default WorkFilters;