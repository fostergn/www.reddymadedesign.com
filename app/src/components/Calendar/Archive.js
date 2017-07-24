import React from 'react';
import Logo from '../Logo/Logo';
import ArchiveSingle from './ArchiveSingle';
import ArchiveYear from './ArchiveYear';
import Loading from '../Loading/Loading';

const Archive = ({ archives }) => {

		if(archives.length === 0) { return (<Loading />)}

	const years = [2016, 2015, 2014, 2013, 2012, 2011];

	const yearsList = years
					.map(year => archives
												.filter(archive => parseInt(archive.acf.year, 10) === year)
												.sort((a, b) => parseInt(a.acf.day_of_the_month, 10) - parseInt(b.acf.day_of_the_month, 10))
												.map((building, index) => <ArchiveSingle key={building.title.rendered} position={index} building={building} />)
					);
	
	return (
		<div className="archive">
			<Logo/>
			<div className="calendar-grid__container">
				<ArchiveYear year="2016" />
				{yearsList[0]}
				<ArchiveYear year="2015" />
				{yearsList[1]}
				<ArchiveYear year="2014" />
				{yearsList[2]}
				<ArchiveYear year="2013" />
				{yearsList[3]}
				<ArchiveYear year="2012" />
				{yearsList[4]}
				<ArchiveYear year="2011" />
				{yearsList[5]}
				<p className="col-10" style={{marginBottom:'10px', color:'#fff'}}>dog</p>
			</div>
		</div>
	)
}

export default Archive;