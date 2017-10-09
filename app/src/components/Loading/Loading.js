import React from 'react';
import classNames from 'classnames';

const Loading = ({hasLoaded}) => {

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
