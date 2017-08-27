import React from 'react';
import moment from 'moment';

const InstagramSingle = ({image, time}) => {

  return (
		<div className="instagram__image-container">
			<img src={image.url} />
			<p className="about-content__date">{moment(new Date(parseInt(time) * 1000)).format('MM.DD.YY')}</p>
		</div>
  );
}

export default InstagramSingle;
