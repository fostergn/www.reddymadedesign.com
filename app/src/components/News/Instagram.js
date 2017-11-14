import React from 'react';
import fetch from 'isomorphic-fetch';
import instafeed from 'instafeed';
import InstagramSingle from './InstagramSingle';

const Instagram = ({instagram}) => {

	if(instagram.length < 1){return null}

	const instagramList = instagram.map(image => <InstagramSingle key={image.timestamp} time={image.timestamp} image={image.url}/>)

  return (
		<div className="grid grid--16 grid--instagram">
			{instagramList}
		</div>
  );
}

export default Instagram;
