import React from 'react';
import List from '../List/ListContainer';
import WorkGrid from '../Grid/GridContainer';
import classNames from 'classnames';

const Work = ({workView, workFilter, workFilterOpen}) => {

	const workContent = workView === 'grid' ? <WorkGrid workFilter={workFilter} /> : <List workFilter={workFilter}/>

	const workStyle = classNames({
		'work__container': true,
		'work__container--push': workFilterOpen && workView === 'list'
	})

  return (
		<div className={workStyle}>
			{workContent}
		</div>
  );
}

export default Work;
