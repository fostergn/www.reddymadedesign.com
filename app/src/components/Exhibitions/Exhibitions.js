import React from 'react';
import Logo from '../Logo/Logo';
import Content from './ExhibitionContent';
import Loading from '../Loading/Loading';

const Exhibitions = ({ exhibitions }) => {
	if (exhibitions.length === 0){return <Loading />}
	const content = <Content page={exhibitions[0]} />
	return (
		<div className="grid">
			<Logo/>
			{content}
		</div>
	)
}

export default Exhibitions;