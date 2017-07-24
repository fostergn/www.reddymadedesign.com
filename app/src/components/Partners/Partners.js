import React from 'react';
import Logo from '../Logo/LogoPartners';
import Content from './PartnersContent';
import Loading from '../Loading/Loading';

const Partners = ({ partners }) => {
if(partners.length === 0){return <Loading/>}

	const content = <Content partners={partners} />
	return (
		<div>
			<Logo/>
			{content}
		</div>
	)
}

export default Partners;