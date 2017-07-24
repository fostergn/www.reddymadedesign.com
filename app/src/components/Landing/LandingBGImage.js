import React from 'react';

const BGImage = ({buildingOfTheDay}) => {
	
	return (
		<div className="grid grid--single">
			<aside className="sidebar__wrapper" style={{visibility: 'hidden'}}>
				<p>
					Sunday <br/>
					October 01 <br/>
					10:00AM
				</p>
				<p>140 Essex St, New York, NY 10002</p>
				Buy Tickets
			</aside>
			<section className="single-content__body" style={{visibility: 'hidden'}}>
				<header className="single-content__header">
					<p>Building of the Day</p>
					<h2>Someone at somewhere</h2>
				</header>
				<p className="content__copy" style={{fontWeight:'300'}}>Stub content</p>
			</section>
			<ul id="landing-image" className="gallery__wrapper">
				<div className="gallery__image-wrapper gallery__image-wrapper--active">
					<div className="gallery__image-figure" style={{visibility: 'hidden'}}>
						<p className="gallery__image-counter">1 / 1</p>
						{/*<p className="gallery__image-credit">someone</p>*/}
					</div>			
					<img className="gallery__image" src={buildingOfTheDay.acf.images[0].image.sizes.large} />
				</div>
			</ul>
		</div>
	)
}

export default BGImage;
