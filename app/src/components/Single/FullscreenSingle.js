import React from 'react';
import classNames from 'classnames';

const SingleImage = ({ img, position, forwards, total, caption, show, prev, next, nextImage, prevImage, isLandscape, fullscreen, toggleFullscreen }) => {

	const wrapperClasses = classNames({
		'fullscreen__image-wrapper' : true,
		'fullscreen__image-wrapper--active' : show,
		'fullscreen__image-wrapper--prev' : prev,
		'fullscreen__image-wrapper--next' : next,
		'fullscreen__image-wrapper--backwards' : !forwards,
	});

	const imageClasses = classNames({
		'fullscreen__image' : true,
		'fullscreen__image--bg' : isLandscape,
	});

	const captionClasses = classNames({
		'fullscreen__image-caption' : true,
		'fullscreen__image-caption--hide' : position === 1,
	});

	const fullscreenClasses = classNames({
		'fullscreen__fullscreen' : true,
		'fullscreen__fullscreen--hide' : position === 1,
	});

	return (
		<div className={wrapperClasses}>
			<div className="fullscreen__image-content">
				<img className={imageClasses} src={img} />
			</div>
			<div className="fullscreen__target-left"  onClick={() => fullscreen._prevImage() }></div>
			<div className="fullscreen__target-right"  onClick={() => fullscreen._nextImage() }></div>
		</div>
	)
}

export default SingleImage;
