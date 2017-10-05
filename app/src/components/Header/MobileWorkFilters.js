import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

const MobileWorkFilters = ({updateQuadrant, updateQuadrantMode, path, workFilterOpen, workView, changeWorkView, changeGridFilter, changeListFilter, gridFilter, listFilter}) => {

	const filterContainerClass = classNames({
		'mobile-work-filters__container': true,
		'mobile-work-filters__container--active': workFilterOpen && ['/work', 'work', 'list'].includes(path)
	});

	const gridClass = classNames({
		'mobile-work-filters__view-item': true,
		'mobile-work-filters__view-item--active': workView === 'grid'
	});

	const listClass = classNames({
		'mobile-work-filters__view-item': true,
		'mobile-work-filters__view-item--active': workView === 'list'
	});
	const viewClass = classNames({
		'mobile-work-filters__view': true,
		'mobile-work-filters__view--active': workFilterOpen && ['/work', 'work', 'list'].includes(path)
	});

	const filterClass = (filter) => {

		const isWorkFilterActive = workView === 'grid' ? gridFilter === filter : ( (filter === 'all' && listFilter.length === 0) ? true : listFilter.includes(filter))

		return classNames({
			'mobile-work-filters__list-item': true,
			'mobile-work-filters__list-item--active': isWorkFilterActive
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

	const handleFilterClick = () => {
		$('.mobile-work-filters__list').toggleClass('mobile-work-filters__list--active');
	}

  return (
        <div className={filterContainerClass}>
        	<ul className="mobile-work-filters__list">
        		<li onClick={() => handleClick('all', workView)} className={filterClass('all')}>All</li>
        		<li onClick={() => handleClick('architecture', workView)} className={filterClass('architecture')}>Architecture</li>
        		<li onClick={() => handleClick('interior', workView)} className={filterClass('interior')}>Interior Design</li>
        		<li onClick={() => handleClick('collaborations', workView)} className={filterClass('collaborations')}>Collaborations</li>
        		<li onClick={() => handleClick('products', workView)} className={filterClass('products')}>Editions</li>
        		<div onClick={() => handleFilterClick()} className="mobile-close-filter">X</div>
        	</ul>
        	<div className={viewClass}>
        		<div className="mobile-filter-button" onClick={() => handleFilterClick()}>Filter</div>
        		<div className="mobile-grid-list">
	        		<div className={gridClass} onClick={() => changeWorkView('grid')}>Grid</div>
	        		&nbsp;/&nbsp;
	        		<div className={listClass} onClick={() => changeWorkView('list')}>List</div>
	        	</div>
        	</div>
        </div>
  );
}

export default MobileWorkFilters;