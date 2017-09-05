import React from 'react';
import GridQuadrant from './GridQuadrant';

const Grid = ({ projects, gridFilter, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode}) => {

	const architectureProjects = projects.filter((project) => project.acf.primary_tag === "architecture");
	const productsProjects = projects.filter((project) => project.acf.primary_tag === "products");
	const collaborationsProjects = projects.filter((project) => project.acf.primary_tag === "collaborations");
	const interiorProjects = projects.filter((project) => project.acf.primary_tag === "interior");

  return (
		<div className="quadrant__container">
			<GridQuadrant gridFilter={gridFilter} projects={architectureProjects} quadrantName="architecture" category="Architecture" quadrantNumber={1} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant gridFilter={gridFilter} projects={productsProjects} quadrantName="products" category="Products" quadrantNumber={2} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant gridFilter={gridFilter} projects={collaborationsProjects} quadrantName="collaborations" category="Collaborations" quadrantNumber={3} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			<GridQuadrant gridFilter={gridFilter} projects={interiorProjects} quadrantName="interior" category="Interior Design" quadrantNumber={4} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
		</div>
  );
}

export default Grid;
