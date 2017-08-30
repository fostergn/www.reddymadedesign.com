import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import GridSingle from './GridQuadSingle';
// import projects from '../../settings/projects';

const Grid = ({ projects, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode, category, quadrantNumber}) => {

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
		'quadrant__content--left': quadrantNumber === 1 || quadrantNumber === 3,
		'quadrant__content--right': quadrantNumber === 2 || quadrantNumber === 4
	})

	const quadSinglesList = projects.map((project) => <GridSingle key={project.date} project={project}/>)

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
					{quadSinglesList}
				</div>
			</div>
		</div>
  );
}

export default Grid;
