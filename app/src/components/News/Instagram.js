import React from 'react';

const Instagram = ({}) => {

	let images = [];
	let imagesList = 'loading';

//5709509421
	const promise = fetch('https://api.instagram.com/v1/users/5709509421/media/recent/?access_token=211663601.a93130d.08e9730cf14f4e3998072b9f0948db3c')
		.then(response => response.json())
		.then(json => {console.log(json); return images = json.items})

	if(images.length > 0){
		imagesList = images.map(image => <div><img src={image.images.standard_resolution.url}/><p className="about-content__date">{image.created_time}</p></div>)
	}

	console.log('images: ', images);
	console.log(promise);
	console.log('instagram!');

  return (
		<div>
			THE GRAM
			{imagesList}
		</div>
  );
}

export default Instagram;
