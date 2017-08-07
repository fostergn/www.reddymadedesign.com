import React from 'react';
import classNames from 'classnames';
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
				</div>
			</div>
		</div>
  );
}

export default Grid;
