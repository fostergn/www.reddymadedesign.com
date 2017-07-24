import React from 'react';
import { Link } from 'react-router'

const Logo = () => {
	const headerText = <Link style={{whiteSpace: 'nowrap'}} className="col-3 col-pad-1"><h3 className="logo__header content__single-header content__single-header--desktop">Pa<span style={{letterSpacing: '.03em'}}>r</span>tners</h3></Link>;

	return (
		<div className="logo title__header">
			<Link className="col-3" to='/'><h1>Archtober</h1></Link>
			{headerText}
		</div>
	)
}

export default Logo;