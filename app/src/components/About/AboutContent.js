import React from 'react';
import ContentBlock from './AboutContentBlock';
import FaqBlock from './FaqBlock';

const Content = ({ page }) => {
	const { about, mission, participating_organizations, 
					visitor_information, faqs, building_of_the_day, sponsorship, media_inquiries } = page.acf

	const faqList = faqs.map(faq => <FaqBlock key={faq.question} question={faq.question} answer={faq.answer} />)

	return (
		<div className="grid__item grid__item--about">
			<div className="grid__sub-item grid__sub-item--about">
				<ContentBlock header="About" content={about} />
				<ContentBlock header="Mission" content={mission} />
				<ContentBlock header="Participating Organizations" content={participating_organizations} />
				<ContentBlock header="Building of the Day" content={building_of_the_day} />
				{/*<ContentBlock header="Contact" content={contact} />*/}
				<article className="block__wrapper">
					<header className="block__header">Contact</header>
					<h4 style={{fontWeight:'bold'}}>Sponsorship</h4>
					<section className="block__copy">{sponsorship}</section><br/>
					<h4 style={{fontWeight:'bold'}}>Media Inquiries</h4>
					<section className="block__copy">{media_inquiries}</section>
				</article>
			</div>
			<div className="grid__sub-item grid__sub-item--about">
				<ContentBlock header="Visitor Information" content={visitor_information} />
				<article className="block__wrapper">
					<header className="block__header">FAQs</header>
					<section className="block__copy">{faqList}</section>
				</article>
			</div>
		</div>
	)
}

export default Content;