import React from 'react';

const Featured = ({features}) => {

	const featuresList = features.map(feature => <a style={{display:'block'}} target="_blank" href={feature.acf.link} className="about-content__copy">{feature.acf.title}</a>)

  return (
	<article className="about-content__article">
		<header className="about-content__header">Featured</header>
		{featuresList}
	</article>
  );
}

export default Featured;
