import React from 'react';
import { Link } from 'react-router';

const LandingImage = ({ index, projects, hasLoaded, markLoaded, project, projectQuote }) => {

	const landingProject = projects.find(proj => proj.slug === project.post_name);

	if (landingProject == undefined) { return <div></div> }

	const { images, work_image } = landingProject.acf;

	const projectImage = typeof work_image != 'undefined' && work_image !== false ? work_image.sizes.large : images[0].image.sizes.large;

	const handleLoad = () => {

		if (!hasLoaded) {

			return markLoaded()
		}
	}

  return (
		<Link to={`/work/${landingProject.slug}`} className={`quadrant__single quadrant__single--${index} quadrant__single--landing quadrant__single--image`}>
			<img
				src={projectImage}
				onLoad={() => handleLoad()}
			/>
			<p className="quadrant__quote" style={{zIndex: 100, width: '100%', color:'#fff', position:'absolute', left:'50%', top:'50%', transform: 'translate(-50%, -50%)', padding: '0 10%'}}>
				{projectQuote}
			</p>
		</Link>
  );
}

export default LandingImage;
