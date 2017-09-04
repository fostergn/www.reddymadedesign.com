import React from 'react';
import classNames from 'classnames';
import RelatedProject from './RelatedProject';
import SmallCarousel from './SmallCarousel';
import Fullscreen from './Fullscreen';
import Link from 'react-router';
import $ from 'jquery';

const Single = ({ location, projects, isFullscreen, toggleFullscreen }) => {

	if (projects.length < 1){ return <div>loading...</div>}

	$('body').animate({ scrollTop: 0});

	const { pathname } = location;
	const pathSlug = pathname.replace('/work/', '');

	const project = projects.find(project => {
		return project.slug === pathSlug
	});

	const { title, hero_image, description, images, primary_tag, secondary_tags, related_projects } = project.acf;

	const relatedProjects = related_projects[0].project.map(project => <RelatedProject key={project.ID} projects={projects} project={project} />)

	const allTags = [primary_tag, ...secondary_tags];
	const tags = allTags.join(', ');

  return (
		<div className="single__container">
			<div className="single__hero">
				<img src={hero_image.sizes.large} />
			</div>
			<div className="single__split">
				<div className="single__split-left">
					<div className="single__grid-left">
						<div className="single__header">
							<div className="single__title">{title}</div>
							<div className="single__tags">{tags}</div>
						</div>
						<div className="single__description" dangerouslySetInnerHTML={{__html: description}}></div>
						<div className="single__related">
							<div className="single__related-title">Related Projects</div>
							{relatedProjects}
						</div>
					</div>
				</div>
				<SmallCarousel images={images} toggleFullscreen={toggleFullscreen}/>
			</div>
			<Fullscreen isFullscreen={isFullscreen} images={images} toggleFullscreen={toggleFullscreen} />
		</div>
  );
}

export default Single;
