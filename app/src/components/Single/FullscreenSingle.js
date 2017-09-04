import React from 'react';
import classNames from 'classnames';

const SingleImage = ({ img, position, total, caption, show, nextImage, prevImage, isLandscape, fullscreen, toggleFullscreen }) => {

	const wrapperClasses = classNames({
		'fullscreen__image-wrapper' : true,
		'fullscreen__image-wrapper--active' : show,
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
			<div className="fullscreen__controls">
				<div className="fullscreen__left-control">{caption}</div>
				<div className="">{position} / {total}</div>
				<div className="fullscreen__right-control" onClick={() => toggleFullscreen()}>Close</div>
			</div>
			<div className="fullscreen__target-left"  onClick={() => fullscreen._prevImage() }></div>
			<div className="fullscreen__target-right"  onClick={() => fullscreen._nextImage() }></div>
		</div>
	)
}

export default SingleImage;
