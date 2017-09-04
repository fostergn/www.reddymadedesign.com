import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import projects from '../../settings/projects';
import GridQuadrant from './GridQuadrant';

const Grid = ({ projects, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode}) => {

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

	const architectureProjects = projects.filter((project) => project.acf.primary_tag === "architecture");
	const productsProjects = projects.filter((project) => project.acf.primary_tag === "products");
	const collaborationsProjects = projects.filter((project) => project.acf.primary_tag === "collaborations");
	const interiorProjects = projects.filter((project) => project.acf.primary_tag === "interior");

  return (
		<div className="quadrant__container">
			<GridQuadrant projects={architectureProjects} quadrantName="architecture" category="Architecture" quadrantNumber={1} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant projects={productsProjects} quadrantName="products" category="Products" quadrantNumber={2} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant projects={collaborationsProjects} quadrantName="collaborations" category="Collaborations" quadrantNumber={3} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant projects={interiorProjects} quadrantName="interior" category="Interior Design" quadrantNumber={4} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
		</div>
  );
}

export default Grid;
