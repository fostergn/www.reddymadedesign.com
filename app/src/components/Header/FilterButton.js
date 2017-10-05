import React from 'react';
import hamburger from '../../images/hamburger.svg';

const FilterButton = ({workFilterOpen, toggleFilterMenu}) => {

	const filterButton = workFilterOpen ? 'X' : <img style={{height:14}} src={hamburger} />;

  return (
        <div className="header__filter-button" onClick={() => toggleFilterMenu()}>{filterButton}</div>
  );
}

export default FilterButton;