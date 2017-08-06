import React from 'react';
import classNames from 'classnames';
import MTemplate from '../Template/M';
import Contact from './Contact';
import Map from './Map';
import Social from './Social';
import Staff from './Staff';
import Featured from './Featured';

const About = ({}) => {

  return (
	<div className="template-half__container">
		<MTemplate />
		<div className="template-half template-half--left">
			<div className="about-content__container">
				<article className="about-content__article">
					<header className="about-content__header">Reddymade<br/>Architecture Design</header>
					<div className="about-content__copy about-content__copy--about">
						<p>The Women’s Building was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.</p>
						<p>Sheathed in ultra-high performance concrete and heat sensitive glass, the new building is an extension of its predecessor with its skin creating an auditorium and event space on the upper floors. This space is illuminated by a three story installation of reflective surfaces that will bring light from the roof into the depths of the building which was to be built and installed by girls and women.</p>
						<p>The Women’s Building was envisioned as a celebratory building for the global girls’ and women’s rights movement. Enlarging and repurposing a former women’s prison in the heart of New York, we provide a remarkable space for one of the most underrepresented comminutes worldwide.</p>
						<p>We conceived of the building as a beacon in the skyline that announces its important collaborative mission. Symbolizing the right of women to occupy their space in the world, the new building embraces the existing in ribbons of concrete and glass that flow together to emphasize a vision collaboration, transformation and power. Driven by the needs of the community it serves, and sensitive to its context in a corridor of iconic architecture, we designed the women’s building as a visually strong fluent form that respects the history of the existing building and translates it into dynamic interior spaces that encourage collaboration and community and include historical elements</p>
					</div>
				</article>
				<article className="about-content__article">
					<header className="about-content__header">Suchi Reddy</header>
					<div className="about-content__copy about-content__copy--about">
						<p>The Women’s Building was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.</p>
						<p>Sheathed in ultra-high performance concrete and heat sensitive glass, the new building is an extension of its predecessor with its skin creating an auditorium and event space on the upper floors. This space is illuminated by a three story installation of reflective surfaces that will bring light from the roof into the depths of the building which was to be built and installed by girls and women.</p>
						<p>The Women’s Building was envisioned as a celebratory building for the global girls’ and women’s rights movement. Enlarging and repurposing a former women’s prison in the heart of New York, we provide a remarkable space for one of the most underrepresented comminutes worldwide.</p>
						<p>We conceived of the building as a beacon in the skyline that announces its important collaborative mission. Symbolizing the right of women to occupy their space in the world, the new building embraces the existing in ribbons of concrete and glass that flow together to emphasize a vision collaboration, transformation and power. Driven by the needs of the community it serves, and sensitive to its context in a corridor of iconic architecture, we designed the women’s building as a visually strong fluent form that respects the history of the existing building and translates it into dynamic interior spaces that encourage collaboration and community and include historical elements</p>
					</div>
				</article>
			</div>
		</div>
		<div className="template-half template-half--right">
			<div className="about-content__container">
				<Contact />
				<Map />
				<Social />
				<Staff />
				<Featured />
			</div>
		</div>
	</div>
  );
}

export default About;
