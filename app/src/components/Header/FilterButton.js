import React from 'react';

const FilterButton = ({workFilterOpen, toggleFilterMenu}) => {

	const filterButton = workFilterOpen ? 'X' : 'Filter';

  return (
        <div className="header__filter-button" onClick={() => toggleFilterMenu()}>{filterButton}</div>
  );
}

export default FilterButton;