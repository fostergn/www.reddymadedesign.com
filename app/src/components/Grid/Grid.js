import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import projects from '../../settings/projects';

const Grid = ({ workFilter, workView, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode}) => {

	const handleMouseEnter = (quadrant) => {
		updateQuadrantMode('hover');
		updateQuadrant(quadrant);
	}

	const handleClick = (quadrant) => {
		updateQuadrantMode('click');
		updateQuadrant(quadrant);
	}

	const handleMouseLeave = () => {
		updateQuadrantMode('none');
		updateQuadrant('none');
	}

	const quadClass = (quad) => {
		return classNames({
			'quadrant__single': true,
			[`quadrant__single--${quad}`]: true,
			'quadrant__single--hover': quadrantMode === 'hover' && quadrant === quad,
			'quadrant__single--click': quadrantMode === 'click' && quadrant === quad,
		});
	}

  return (
		<div className="quadrant__container">
			<div
				onMouseEnter={() => handleMouseEnter(1)}
				onMouseLeave={() => handleMouseLeave()}
				onClick={() => handleClick(1)}
				className={quadClass(1)}
			>
				<div className="quadrant__content quadrant__content--left">
					<div className="quadrant__title">Architecture</div>
					<div className="quadrant__close">close</div>
					<div className="quadrant__images">
						<Link to="/work/the-womens-building" className="quadrant__image"><div className="quadrant__image-hover"><div className="quadrant__image-title">Women's Building</div><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/TWB-Ext-01_11TH-AVE-1600x1065.jpg"/></div></Link>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2017/07/2.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/east-elevation-1-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/Douglas-Friedman_Trunk-Archive-4.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/SR-dreammachine-058-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/44-Yulman-Int-Living-15-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/45-fifth_ruthie_03-800x740.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/MG_8047-1-1600x1065.jpg"/></div>
					</div>
				</div>
			</div>
			<div
				onMouseEnter={() => handleMouseEnter(2)}
				onMouseLeave={() => handleMouseLeave()}
				onClick={() => handleClick(2)}
				className={quadClass(2)}
			>
				<div className="quadrant__content quadrant__content--right">
					<div className="quadrant__title">Products</div>
					<div className="quadrant__close">close</div>
					<div className="quadrant__images">
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/ext-shot-rear-final-size-copy-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/01-Yulman-Ext-Aerial-1-1600x900.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/45-fifth_ruthie_03-800x740.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/int_4-final-size-copy-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/SR-dreammachine-058-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/corridor-rear-final-size-copy-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/44-Yulman-Int-Living-15-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/45-fifth_ruthie_03-800x740.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/ext-shot-rear-night_01-final-size-copy_square-1-800x1200.jpg"/></div>
					</div>
				</div>
			</div>
			<div
				onMouseEnter={() => handleMouseEnter(3)}
				onMouseLeave={() => handleMouseLeave()}
				onClick={() => handleClick(3)}
				className={quadClass(3)}
			>
				<div className="quadrant__content quadrant__content--left">
					<div className="quadrant__title">Collaborations</div>
					<div className="quadrant__close">close</div>
					<div className="quadrant__images">
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/Tilting-Rock-Front-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/15-Yulman-Ext-Pool-Sculpture-1-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/east-elevation-1-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/01-Yulman-Ext-Aerial-1-1600x900.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/SR-dreammachine-058-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/44-Yulman-Int-Living-15-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/45-fifth_ruthie_03-800x740.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/MG_8047-1-1600x1065.jpg"/></div>
					</div>
				</div>
			</div>
			<div
				onMouseEnter={() => handleMouseEnter(4)}
				onMouseLeave={() => handleMouseLeave()}
				onClick={() => handleClick(4)}
				className={quadClass(4)}
			>
				<div className="quadrant__content quadrant__content--right">
					<div className="quadrant__title">Interior Design</div>
					<div className="quadrant__close">close</div>
					<div className="quadrant__images">
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/44-Yulman-Int-Living-15-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/90-Yulman-Int-Cabana-3-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/48-Yulman-Int-Living-19-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/61-Yulman-Int-Dining-4-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/SR-dreammachine-058-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/44-Yulman-Int-Living-15-1600x1065.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/45-fifth_ruthie_03-800x740.jpg"/></div>
						<div className="quadrant__image"><img src="https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/MG_8047-1-1600x1065.jpg"/></div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Grid;
