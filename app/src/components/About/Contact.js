import React from 'react';

const Contact = ({ address_line_1, address_line_2 }) => {

  return (
	<article className="about-content__article">
		<header className="about-content__header">Contact</header>
		<p className="about-content__copy">Reddymade</p>
		<p className="about-content__copy">{address_line_1}</p>
		<p className="about-content__copy">{address_line_2}</p>
	</article>
  );
}

export default Contact;
