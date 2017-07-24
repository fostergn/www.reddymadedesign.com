import React from 'react';
import classNames from 'classnames';

const SingleImage = ({ img, position, credit, total, show }) => {

	const imageClasses = classNames({
		'gallery__image-wrapper' : true,
		'gallery__image-wrapper--active' : show,
	});

	const imageCredit = typeof credit !== 'undefined' ? credit.length > 0 ? `Image credit: ${credit}` : '' : '';

	return (
		<div className={imageClasses}>
			<div className="gallery__image-figure">
				<p className="gallery__image-counter">{position} / {total}</p>
				<p className="gallery__image-credit">{imageCredit}</p>
			</div>			
			<img className="gallery__image" src={img} />
		</div>
	)
}

export default SingleImage;
