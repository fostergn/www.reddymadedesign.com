import React from 'react';
import $ from 'jquery';

const StaffListing = ({member}) => {

	const { name } = member;

	const handleClick = (name) => {

		$('.template-half--left').scrollTop(0);
		return $('.template-half--left').animate({ scrollTop: $(`[data-staff="${name}"]`).offset().top - 60 });
		// return $('.template-half--left').scrollTop($(`[data-staff="${name}"]`).offset().top - 60);
	}

  return (
		<p className="about-content__copy" onClick={() => handleClick(name)}>{name}</p>
  );
}

export default StaffListing;
