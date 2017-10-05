import React from 'react';
import { Link } from 'react-router';

const LandingImage = ({ index, projects, project, projectQuote }) => {

	const landingProject = projects.find(proj => proj.slug === project.post_name);

	if (landingProject == undefined) { return <div></div> }

	const { images, work_image } = landingProject.acf;

	const projectImage = typeof work_image != 'undefined' && work_image !== false ? work_image.sizes.large : images[0].image.sizes.large;

  return (
		<Link to={`/work/${landingProject.slug}`} className={`quadrant__single quadrant__single--${index} quadrant__single--landing quadrant__single--image`}>
			<img src={projectImage}/>
		</Link>
  );
}

export default LandingImage;
