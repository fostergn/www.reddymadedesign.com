import React from 'react';

const Contact = ({facebook_url, instagram_url, linkedin_url, phone_number, fax_number, email }) => {

  return (
	<article className="about-content__article">
		<a href={facebook_url} target="_blank"><p className="about-content__copy">Facebook</p></a>
		<a href={instagram_url} target="_blank"><p className="about-content__copy">Instagram</p></a>
		<a href={linkedin_url} target="_blank"><p className="about-content__copy">LinkedIn</p></a>

		<br/>
		<br/>

		<p className="about-content__copy">P {phone_number}</p>
		<p className="about-content__copy">F {fax_number}</p>
		<p className="about-content__copy">{email}</p>
	</article>
  );
}

export default Contact;
