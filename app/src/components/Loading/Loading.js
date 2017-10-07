import React from 'react';
import classNames from 'classnames';

const Loading = ({hasLoaded}) => {

	console.log('has loaded? ; ', hasLoaded);

	const loadedClasses = classNames({
		loading: true,
		'loading--inactive': hasLoaded
	});

  return (
	<div className={loadedClasses}>
	</div>
  );
}

export default Loading;
