import React from 'react';
import projects from '../../settings/projects';
import ListItemText from './ListItem';
import ListItemImage from './ListItemImage';

const List = ({projects, listFilter}) => {

	if (projects.length === 0) {return <div>Loading...</div>}

	const itemsTextList = projects.map(project => <ListItemText key={project.id} listFilter={listFilter} project={project.acf}/>);
	const itemImageList = projects.map(project => <ListItemImage key={project.date} listFilter={listFilter} project={project.acf}/>);

  return (
		<div className="list__container">
			<div className="list__left">
				{itemsTextList}
				{itemsTextList}
				{itemsTextList}
			</div>
			<div className="list__right">
				<div className="list__right-content">
					{itemImageList}
				</div>
			</div>
		</div>
  );
}

export default List;
