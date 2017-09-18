import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import GridSingle from './GridQuadSingle';
// import projects from '../../settings/projects';

const Grid = ({ projects,  workFilterOpen, gridFilter, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode, category, quadrantNumber, quadrantName}) => {

	const handleMouseEnter = (quadrant) => {
		console.log('handleMouse enter: ');
		console.log('quadrantMode: ', quadrantMode);
		console.log('quadrant: ', quadrant);
		if (quadrantMode === 'click' && gridFilter !== 'all') {return}
		updateQuadrantMode('hover');
		updateQuadrant(quadrant);
	}

	const handleClick = (quadrant) => {
		updateQuadrantMode('click');
		updateQuadrant(quadrant);
	}

	const handleMouseLeave = () => {
		if (quadrantMode === 'click') {return}
		updateQuadrantMode('none');
		updateQuadrant('none');
	}

	const hoverVariable = Math.random() >= 0.5 ? '-horizontal' : '-vertical';

	const quadClass = (quad) => {
		return classNames({
			'quadrant__single': true,
			[`quadrant__single--${quad}`]: true,
			[`quadrant__single--hover${hoverVariable}`]: quadrantMode === 'hover' && quadrant === quad,
			'quadrant__single--click': quadrantMode === 'click' && quadrant === quadrantName,
			'quadrant__single--open': workFilterOpen
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
