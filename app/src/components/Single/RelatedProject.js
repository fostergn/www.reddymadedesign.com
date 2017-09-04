import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const Related = ({ project, projects }) => {

	const relatedProject = projects.find(related => {console.log('related: ', related); console.log('prject: ', project); return related.id === project.ID});

	return (
		<p><Link to={`/work/${relatedProject.slug}`}>{relatedProject.acf.title}</Link></p>
	)
}

export default Related;
