import React from 'react';
import projects from '../../settings/projects';
import ListItemText from './ListItem';
import ListItemImage from './ListItemImage';

const List = ({workFilter}) => {

	const itemsTextList = projects.map(project => <ListItemText workFilter={workFilter} project={project}/>);
	const itemImageList = projects.map(project => <ListItemImage workFilter={workFilter} project={project}/>);

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
