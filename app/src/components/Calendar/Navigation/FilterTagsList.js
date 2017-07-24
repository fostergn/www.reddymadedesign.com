import React from 'react';
import tags from '../../../settings/filterTags';
import FilterTag from './FilterTag';
import classNames from 'classnames';

const FilterTagsList = ({ toggleFilter, buildingsFilters, mapFilters, eventsFilters, buildingsFiltersVisible, toggleFiltersVisibility, buildingsView }) => {
	const relevantTags = {
		'buildings': {
			tags: tags.days,
			filters: buildingsFilters
		},
		'calendar': {
			tags: tags.days,
			filters: buildingsFilters
		},
		'events': {
			tags: tags.events,
			filters: eventsFilters
		},
		'map': {
			tags: tags.map,
			filters: mapFilters
		}
	}
	const tagsList = relevantTags[buildingsView].tags.map(tag => <FilterTag 
																			key={tag.name} 
																			tag={tag} 
																			type={buildingsView}
																			toggleFilter={toggleFilter} 
																			filters={relevantTags[buildingsView].filters} 
																		/>)

	const filterClass = ['calendar'].includes(buildingsView) ? 'filters--hidden' : '';

	const headerClasses = classNames({
		'filters__header': true,
		'filters__header--hidden': !buildingsFiltersVisible
	})

	const filterClasses = classNames({
		filters__list: true,
		[`filters__list--${buildingsView}`]: true,
		'filters__list--visible': buildingsFiltersVisible,
		'filters__list--hidden': !buildingsFiltersVisible || buildingsView === 'calendar',
	})

	return (
		<div className={`filters__wrapper ${filterClass} ${buildingsView}`}>
			<h4 className={headerClasses} onClick={() => toggleFiltersVisibility()}>Filter</h4>
			<ul className={filterClasses}>
				{tagsList}
			</ul>
		</div>
	)
}

export default FilterTagsList;