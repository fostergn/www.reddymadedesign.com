import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import projects from '../../settings/projects';
import GridQuadrant from './GridQuadrant';

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
			<GridQuadrant category="Architecture" quadrantNumber={1} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant category="Products" quadrantNumber={2} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant category="Collaborations" quadrantNumber={3} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant category="Interior Design" quadrantNumber={3} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
		</div>
  );
}

export default Grid;
