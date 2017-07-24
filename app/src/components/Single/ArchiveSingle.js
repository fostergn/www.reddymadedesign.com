import React from 'react';
import Logo from '../Logo/Logo';
import SingleImageList from './SingleImageList';
import SingleContent from './SingleContent';
import SingleSidebar from './SingleSidebar';
import Loading from '../Loading/Loading';
import { Link } from 'react-router';

const ArchiveSingle = ({ params, archives }) => {
	// check for initial data
	if(archives.length === 0){return <Loading/>}

	const { year, monthDay } = params;
	const extraneous = 'october-';
	const day = monthDay.replace(extraneous, '');

	// search for single archive
	const archive = archives.find(archive => archive.acf.day_of_the_month === day);
	const { images, archive_content, building_name, address, architect  } = archive.acf;

	return (
		<div>
			<Logo header={`October ${day}`}/>
			<div className="title__header content__single-header content__single-header--mobile">Building of the Day</div>
			<main className="grid grid--single">
				<SingleSidebar archive={true} date={`${monthDay}/10/${year},`} time={year} address={address} />
				<SingleContent title={building_name} architect={architect} description={archive_content} />
				<SingleImageList images={images}/>
			</main>
			<Link to="/archive" className="single__nav-calendar title__header">
				<i className="arrow left large"></i>Archive
			</Link>
		</div>
	)
}

export default ArchiveSingle;
