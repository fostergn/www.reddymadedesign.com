import React from 'react';
import classNames from 'classnames';
import projects from '../../settings/projects';

const Single = ({ location }) => {

	const { pathname } = location;
	const pathSlug = pathname.replace('/work/', '');

	const project = projects.find(project => project.slug === pathSlug);

	const { name, slug, description, images, primaryTag, secondaryTags } = project;

	const allTags = [primaryTag, ...secondaryTags];
	const tags = allTags.join(', ');

  return (
		<div className="single__container">
			<div className="single__hero">
				<img src={images[0]} />
			</div>
			<div className="single__split">
				<div className="single__split-left">
					<div className="single__grid-left">
						<div className="single__header">
							<div className="single__title">{name}</div>
							<div className="single__tags">{tags}</div>
						</div>
						<div className="single__description">{description}</div>
						<div className="single__related">
							<div className="single__related-title">Related Projects</div>
							<p>Pool House</p>
							<p>Prince Street Loft</p>
							<p>The Women's Building</p>
							<p>Doug's House</p>
						</div>
					</div>
				</div>
				<div className="single__split-right">
					<div className="single__image-container single__image-container--bg">
						<img src={images[2]} />
					</div>
				</div>
			</div>
		</div>
  );
}

export default Single;
