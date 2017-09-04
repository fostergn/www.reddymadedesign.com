import React from 'react';
import $ from 'jquery';

const StaffListing = ({member}) => {

	const { name } = member;

	const handleClick = (name) => {

		$('.template-half--left').scrollTop(0);
		return $('.template-half--left').animate({ scrollTop: $(`[data-staff="${name}"]`).offset().top - 60 });
	}

  return (
		<p className={`about-content__copy about-content__copy--${name}`} onClick={() => handleClick(name)}>{name}</p>
  );
}

export default StaffListing;
