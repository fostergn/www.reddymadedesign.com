import React from 'react';

const Featured = ({featured_list}) => {

	const featuresList = featured_list.map(feature => <a style={{display:'block'}} target="_blank" href={feature.link} className="about-content__copy">{feature.text}</a>)

  return (
	<article className="about-content__article">
		<header className="about-content__header">Featured</header>
		{featuresList}
	</article>
  );
}

export default Featured;
