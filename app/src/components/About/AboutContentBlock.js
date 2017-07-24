import React from 'react';

const ContentBlock = ({ header, content }) => {
	return (
		<article className="block__wrapper block__wrapper--about">
			<header className="block__header">{header}</header>
			<section className="block__copy" dangerouslySetInnerHTML={{__html: content}}></section>
		</article>
	)
}

export default ContentBlock;