import React from 'react';
import ContentBlock from './PartnersContentBlock';

const Content = ({ partners }) => {

	const institutionalList = partners.filter(partner => partner.acf.type === 'institutional').map(partner => <ContentBlock key={partner.title.rendered} partner={partner} />);
	const professionalList = partners.filter(partner => partner.acf.type === 'professional').map(partner => <ContentBlock key={partner.title.rendered} partner={partner} />);

	return (
		<div className="grid grid--partners">
			<div className="grid__item grid__item--partners">
				<header className="rows__header">Institutional</header>
				<div className="grid grid__sub-item grid__sub-item--partners">
					{institutionalList}
				</div>
			</div>
			<div className="grid__item grid__item--partners">
				<header className="rows__header">Professional</header>
				<div className="grid grid__sub-item grid__sub-item--partners">
					{professionalList}
				</div>
			</div>
		</div>
	)
}

export default Content;