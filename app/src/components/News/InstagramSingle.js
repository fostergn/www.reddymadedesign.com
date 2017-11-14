import React from 'react';
import moment from 'moment';

const InstagramSingle = ({image, time}) => {

  return (
		<div className="instagram__image-container">
			<div style={{
				position: 'absolute',
			    top: '0',
			    left: '0',
			    width: '100%',
			    height: 'calc(100% - 10px)',
			    overflow: 'hidden',
			}}>
				<img src={image} />
			</div>
			<p className="about-content__date">{moment(new Date(parseInt(time) * 1000)).format('MM.DD.YY')}</p>
		</div>
  );
}

export default InstagramSingle;
