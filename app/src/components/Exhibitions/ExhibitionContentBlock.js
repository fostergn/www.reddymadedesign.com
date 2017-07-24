import React from 'react';

const ContentBlock = ({ exhibit }) => {
	const { title, description, start_and_end_date, opening_hours, location, link } = exhibit;
	return (
		<article className="card__wrapper">
			<header className="card__header">
				<h4>{title}</h4><br/>
				<h5>{start_and_end_date}</h5><br/>
				<h5>{location}</h5>
				<h5 dangerouslySetInnerHTML={{__html: opening_hours}}></h5><br/>
				<a href={link}><h5 className="card__header--cta">More Info</h5></a><br/>
			</header>
			<section className="card__copy" dangerouslySetInnerHTML={{__html: description}}></section>
		</article>
	)
}

export default ContentBlock;