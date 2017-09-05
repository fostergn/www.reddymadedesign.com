import React from 'react';

const Feature = ({ feature }) => {

	const { date, summary, title, link } = feature.acf;

  return (
		<div className="about-content__copy about-content__copy--margin">
			<p className="about-content__date">{date}</p>
			<p className="about-content__description">{summary}</p>
			<p className="about-content__more"><a target="_blank" href={link}>Read More</a></p>
		</div>
  );
}

export default Feature;
