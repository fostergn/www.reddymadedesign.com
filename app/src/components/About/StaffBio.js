import React from 'react';

const Bio = ({member, headshot, max_image_width}) => {

	const { description, name } = member;

	// const styles = max_image_width && parseInt(max_image_width) > 100 ? {maxWidth: max_image_width, width: '100%', paddingTop: '18px'} : {width: '100%', paddingTop: '18px'}
	const styles = { maxWidth: 500, width: '70%', paddingTop: 30}

  return (
		<article className="about-content__article about-content__article--staff" data-staff={name}>
			<header className="about-content__header">{name}</header>
			<div className="about-content__copy about-content__copy--about" dangerouslySetInnerHTML={{__html: description}}>
			</div>
			<p><img src={headshot} style={styles} /></p>
		</article>
  );
}

export default Bio;
