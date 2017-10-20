import React from 'react';
import classNames from 'classnames';
import MTemplate from '../Template/M';
import Contact from './Contact';
import Map from './Map';
import Social from './Social';
import Staff from './Staff';
import StaffBio from './StaffBio';
import Featured from './Featured';

const About = ({about, features}) => {

	if(about.length < 1 || features.length < 1){ return null }

	const { description, featured_list, staff, facebook_url, instagram_url, linkedin_url } = about[0].acf;

	const staffBioList = [staff[0]].map(member => <StaffBio member={member} />);

  return (
	<div className="template-half__container">
		<MTemplate />
		<div className="template-half template-half--left">
			<div className="about-content__container">
				<article className="about-content__article">
					<header className="about-content__header">Reddymade and <br/>Architecture Design</header>
					<div className="about-content__copy about-content__copy--about" dangerouslySetInnerHTML={{__html: description}}>
					</div>
				</article>
				{staffBioList}
			</div>
		</div>
		<div className="template-half template-half--right">
			<div className="about-content__container">
				<Contact />
				<Map />
				<Social facebook_url={facebook_url} instagram_url={instagram_url} linkedin_url={linkedin_url} />
				<Staff staff={staff} />
				<Featured featured_list={featured_list} />
			</div>
		</div>
	</div>
  );
}

export default About;
