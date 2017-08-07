import React from 'react';
import classNames from 'classnames';
import projects from '../../settings/projects';

const Single = ({ location }) => {

	const { pathname } = location;
	const pathSlug = pathname.replace('/work/', '');

	const project = projects.find(project => project.slug === pathSlug);

	const { name, slug, description, images, primaryTag, secondaryTags } = project;

  return (
		<div className="single__container">
			<div className="single__hero">
				<img src={images[0]} />
			</div>
		</div>
  );
}

export default Single;
