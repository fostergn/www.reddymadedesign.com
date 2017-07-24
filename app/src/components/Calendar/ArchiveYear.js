import React from 'react';

const ArchiveYear = ({ year }) => {
	const yearAbrev = year.substr(2);

	return (
		<a href={`http://archtober.com/${year}`} className="calendar-grid__block">
			<div className="calendar-grid__content" style={{position:'absolute'}}>
				<span className="calendar-grid__number" style={{position:'relative', right:'.1em'}}>
					'{yearAbrev}
				</span>
			</div>
		</a>
	)
}

export default ArchiveYear;