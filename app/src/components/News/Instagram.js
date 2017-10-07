import React from 'react';
import fetch from 'isomorphic-fetch';
import instafeed from 'instafeed';
import InstagramSingle from './InstagramSingle';

const Instagram = ({instagram}) => {

	if(instagram.length < 1){return null}

	const instagramList = instagram.map(image => <InstagramSingle key={image.created_time} time={image.created_time} image={image.images.standard_resolution}/>)

  return (
		<div className="grid grid--16 grid--instagram">
			{instagramList}
		</div>
  );
}

export default Instagram;
