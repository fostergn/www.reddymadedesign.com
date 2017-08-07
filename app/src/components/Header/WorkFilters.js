import React from 'react';
import classNames from 'classnames';

const WorkFilters = ({path, workFilterOpen, workView, changeWorkView, changeWorkFilter, workFilter}) => {

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
		return classNames({
			'work-filters__list-item': true,
			'work-filters__list-item--active': workFilter === filter
		});
	}

  return (
        <div className={filterContainerClass}>
        	<div className="work-filters__view">
        		<div className={gridClass} onClick={() => changeWorkView('grid')}>Grid</div>
        		&nbsp;/&nbsp;
        		<div className={listClass} onClick={() => changeWorkView('list')}>List</div>
        	</div>
        	<ul className="work-filters__list">
        		<li onClick={() => changeWorkFilter('all')} className={filterClass('all')}>All</li>
        		<li onClick={() => changeWorkFilter('architecture')} className={filterClass('architecture')}>Architecture</li>
        		<li onClick={() => changeWorkFilter('products')} className={filterClass('products')}>Products</li>
        		<li onClick={() => changeWorkFilter('collaborations')} className={filterClass('collaborations')}>Collaborations</li>
        		<li onClick={() => changeWorkFilter('interior')} className={filterClass('interior')}>Interior Design</li>
        	</ul>
        </div>
  );
}

export default WorkFilters;