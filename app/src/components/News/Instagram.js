import React from 'react';
import fetch from 'isomorphic-fetch';
import instafeed from 'instafeed';

const Instagram = ({}) => {

    // var feed = new instafeed({
		  // get: 'user',
		  // userId: '5709509421',
    //   clientId: 'a93130dd466c4db89eef44d81e5c6475',
    //   success: function(json) {
    //   	console.log('json: ', json);
    //   }
    // });
    // feed.run();

    fetch('http://localhost/api/instagram.php').then(response => response.json()).then(json => console.log(json));

  return (
		<div className="grid grid--16 grid--instagram">
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20184496_1440692949358492_2800741001126215680_n.jpg" />
				<p className="about-content__date">07.01.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20180744_1933580616913252_4394103615162155008_n.jpg" />
				<p className="about-content__date">06.28.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20066612_112782266036059_2059331776416841728_n.jpg" />
				<p className="about-content__date">06.20.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20065396_1347904815257517_7063593400724881408_n.jpg" />
				<p className="about-content__date">06.18.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20066509_1954004558209983_8229211760666607616_n.jpg" />
				<p className="about-content__date">06.15.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20066023_121443415140671_8633839439916826624_n.jpg" />
				<p className="about-content__date">06.12.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20184496_1440692949358492_2800741001126215680_n.jpg" />
				<p className="about-content__date">07.01.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20180744_1933580616913252_4394103615162155008_n.jpg" />
				<p className="about-content__date">06.28.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20066612_112782266036059_2059331776416841728_n.jpg" />
				<p className="about-content__date">06.20.2017</p>
			</div>
			<div className="instagram__image-container">
				<img src="https://instagram.fmex8-2.fna.fbcdn.net/t51.2885-15/e35/20065396_1347904815257517_7063593400724881408_n.jpg" />
				<p className="about-content__date">06.18.2017</p>
			</div>
		</div>
  );
}

export default Instagram;
