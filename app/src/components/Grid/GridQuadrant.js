import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import projects from '../../settings/projects';

const Grid = ({ quadrant, quadrantMode, updateQuadrant, updateQuadrantMode, category, quadrantNumber}) => {

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

	const quadrantContentClass = classNames({
		'quadrant__content': true,
		'quadrant__content--left': quadrant === 1 || quadrant === 3,
		'quadrant__content--right': quadrant === 2 || quadrant === 4
	})

  return (
		<div
			onMouseEnter={() => handleMouseEnter(quadrantNumber)}
			onMouseLeave={() => handleMouseLeave()}
			onClick={() => handleClick(quadrantNumber)}
			className={quadClass(quadrantNumber)}
		>
			<div className={quadrantContentClass}>
				<div className="quadrant__title">{category}</div>
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
  );
}

export default Grid;
