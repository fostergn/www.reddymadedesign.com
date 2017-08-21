import React from 'react';
import classNames from 'classnames';
// import projects from '../../settings/projects';
import SmallCarousel from './SmallCarousel';
import Fullscreen from './Fullscreen';

const Single = ({ location, projects, isFullscreen, toggleFullscreen }) => {

	if (projects.length < 1){ return <div>loading...</div>}

	const { pathname } = location;
	const pathSlug = pathname.replace('/work/', '');

	const project = projects.find(project => {
		console.log('project: ', project);
		console.log('path slug: ', pathSlug);
		return project.slug === pathSlug
	});

	console.log('project: ', project);

	const { title, slug, hero_image, description, images, primary_tag, secondary_tags } = project.acf;

	console.log('acf: ', project.acf);

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
							<p>Pool House</p>
							<p>Prince Street Loft</p>
							<p>The Women's Building</p>
							<p>Doug's House</p>
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
