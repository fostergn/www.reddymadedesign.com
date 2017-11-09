import React, { Component } from 'react';
import GridQuadrant from './GridQuadrant';

class Grid extends Component {

	componentDidMount(){

	}

	componentWillUnmount(){

	}

	render(){

		const { projects, gridFilter, workFilterOpen, quadrant, quadrantMode, updateQuadrant, updateQuadrantMode } = this.props;

		const architectureProjects = projects.filter((project) => project.acf.primary_tag === "architecture");
		const interiorProjects = projects.filter((project) => project.acf.primary_tag === "interior");
		const collaborationsProjects = projects.filter((project) => project.acf.primary_tag === "collaborations");
		const productsProjects = projects.filter((project) => project.acf.primary_tag === "products");

	  return (
			<div className="quadrant__container">
				<GridQuadrant workFilterOpen={workFilterOpen} gridFilter={gridFilter} projects={architectureProjects} quadrantName="architecture" category="Architecture" quadrantNumber={1} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
				<GridQuadrant workFilterOpen={workFilterOpen} gridFilter={gridFilter} projects={interiorProjects} quadrantName="interior" category="Interior Design" quadrantNumber={3} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
				<GridQuadrant workFilterOpen={workFilterOpen} gridFilter={gridFilter} projects={collaborationsProjects} quadrantName="collaborations" category="Installations" quadrantNumber={2} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
				<GridQuadrant workFilterOpen={workFilterOpen} gridFilter={gridFilter} projects={productsProjects} quadrantName="products" category="Editions" quadrantNumber={4} quadrant={quadrant} quadrantMode={quadrantMode} updateQuadrant={updateQuadrant} updateQuadrantMode={updateQuadrantMode}/>
			</div>
	  );
	}
}

export default Grid;
