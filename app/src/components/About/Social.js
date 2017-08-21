import React from 'react';

const Contact = ({facebook_url, instagram_url, linkedin_url}) => {

  return (
	<article className="about-content__article">
		<a href={facebook_url} target="_blank"><p className="about-content__copy">Facebook</p></a>
		<a href={instagram_url} target="_blank"><p className="about-content__copy">Instagram</p></a>
		<a href={linkedin_url} target="_blank"><p className="about-content__copy">LinkedIn</p></a>

		<br/>
		<br/>

		<p className="about-content__copy">P +1212 345 9879</p>
		<p className="about-content__copy">F +1212 898 0328</p>
		<p className="about-content__copy">info@reddymadedesign.com</p>
	</article>
  );
}

export default Contact;
