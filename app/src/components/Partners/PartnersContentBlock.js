import React from 'react';

const ContentBlock = ({ partner }) => {
	const { address, link, link_text } = partner.acf;
	return (
		<article className="card__wrapper">
			<h3 style={{marginBottom: "1em"}} className="card__header">{partner.title.rendered}</h3>
			<p style={{marginBottom: "1em"}} className="serif" dangerouslySetInnerHTML={{__html: address}}></p>
			<a style={{marginBottom: "1em"}} className="yellow" href={link}>{link_text}</a>
		</article>
	)
}

export default ContentBlock;