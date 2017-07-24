import React from 'react';

const FaqBlock = ({ question, answer }) => {
	return (
		<div key={question}>
			<h4 className="block__copy block__copy--header">{question}</h4>
			<p dangerouslySetInnerHTML={{__html: answer}}></p><br/>
		</div>
	)
}

export default FaqBlock;