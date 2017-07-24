import React from 'react';
import ContentBlock from './ExhibitionContentBlock';

const Content = ({ page }) => {
	const exhibitsList = page.acf.exhibition.map(exhibit => <ContentBlock key={exhibit.title} exhibit={exhibit} />)
	return (
		<main className="cards__container">
				{exhibitsList}
		</main>
	)
}

export default Content;