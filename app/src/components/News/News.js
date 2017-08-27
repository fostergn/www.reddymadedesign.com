import React from 'react';
import MTemplate from '../Template/M';
import Instagram from './Instagram';
import Feature from './FeatureSingle';

const News = ({ instagram, features }) => {

	const featuresList = features.map(feature => <Feature feature={feature} />);

  return (
		<div className="template-half__container">
			<MTemplate />
			<div className="template-half template-half--left">
				<div className="about-content__container">
					<article className="about-content__article">
						<header className="about-content__header">Features</header>
						{featuresList}
					</article>
				</div>
			</div>
			<div className="template-half template-half--right">
				<div className="about-content__container about-content__container--instagram">
					<Instagram instagram={instagram} />
				</div>
			</div>
		</div>
  );
}

export default News;
