import React from 'react';
import Logo from '../Logo/FixedLogo';
import Loading from '../Loading/Loading';
import Content from './AboutContent';

const About = ({ about }) => {
	if (about.length === 0){return <Loading />}
	
	const content =  <Content page={about[0]} />
	return (
		<div>
			<Logo/>
			<section className="grid grid--about">
				{content}
			</section>
		</div>
	)
}

export default About;