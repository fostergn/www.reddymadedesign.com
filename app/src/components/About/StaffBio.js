import React from 'react';

const Bio = ({member}) => {

	const { description, name } = member;

  return (
		<article className="about-content__article about-content__article--staff" data-staff={name}>
			<header className="about-content__header">{name}</header>
			<div className="about-content__copy about-content__copy--about" dangerouslySetInnerHTML={{__html: description}}>
			</div>
		</article>
  );
}

export default Bio;
