import React from 'react';
import classNames from 'classnames';

const SingleImage = ({ img, position, caption, show, toggleFullscreen }) => {

	const wrapperClasses = classNames({
		'gallery__image-wrapper' : true,
		'gallery__image-wrapper--active' : show,
	});

	const imageClasses = classNames({
		'gallery__image' : true,
		'gallery__image--bg' : position === 1,
	});

	const captionClasses = classNames({
		'gallery__image-caption' : true,
		'gallery__image-caption--hide' : position === 1,
	});

	const fullscreenClasses = classNames({
		'gallery__fullscreen' : true,
		'gallery__fullscreen--hide' : position === 1,
	});

	return (
		<div className={wrapperClasses}>
			<p className={fullscreenClasses} onClick={() => toggleFullscreen()}>fullscreen</p>
			<p className={captionClasses}>Here is the image caption for now.</p>
			<img className={imageClasses} src={img} />
		</div>
	)
}

export default SingleImage;
