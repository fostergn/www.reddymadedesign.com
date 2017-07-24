import React from 'react';

const Content = ({ title, architect, description }) => {
	return (
		<section className="single-content__body">
			<header className="single-content__header">
				<p>Building of the Day</p>
				<h2>{title} by {architect}</h2>
			</header>
			<p className="content__copy" dangerouslySetInnerHTML={{__html: description}} style={{fontWeight:'300'}}></p>
		</section>
	)
}

export default Content;
