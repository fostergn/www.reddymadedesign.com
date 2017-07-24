import React from 'react';
import { Link } from 'react-router'

const Logo = () => {
	return (
		<Link className="logo logo--about title__header" to='/'>
			<h1>
				Archtober
			</h1>
		</Link>
	)
}

export default Logo;