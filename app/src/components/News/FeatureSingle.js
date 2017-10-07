import React from 'react';

const Feature = ({ feature }) => {

	const { date, summary, title, link } = feature.acf;

	const rendered_link = link !== undefined && link != false && link.length > 3 ? <p className="about-content__more"><a target="_blank" href={link}>Read More</a></p> : '';

  return (
		<div className="about-content__copy about-content__copy--margin">
			<p className="about-content__date">{date}</p>
			<p className="about-content__description">{summary}</p>
			{rendered_link}
		</div>
  );
}

export default Feature;
