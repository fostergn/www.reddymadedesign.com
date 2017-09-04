import React from 'react';
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/3.jpg';
import Image4 from '../../images/4.jpg';
import Image5 from '../../images/5.jpg';
import Image6 from '../../images/6.jpg';
import Image7 from '../../images/7.jpg';
import Image8 from '../../images/8.jpg';
import Image9 from '../../images/9.jpg';
import Image10 from '../../images/10.jpg';

const Landing = () => {

  return (
	<div className="quadrant__container quadrant__container--landing">
		<div className="quadrant__single quadrant__single--1 quadrant__single--landing quadrant__single--image">
			<img src={Image3}/>
		</div>
		<div className="quadrant__single quadrant__single--2 quadrant__single--landing quadrant__single--quote">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
				<br />
				<span>&mdash;Lorum Ipsum</span>
				<br />
				<div className="read-more">Read More</div>
			</p>
		</div>
		<div className="quadrant__single quadrant__single--3 quadrant__single--landing quadrant__single--quote">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
				<br />
				<span>&mdash;Lorum Ipsum</span>
				<br />
				<div className="read-more">Read More</div>
			</p>
		</div>
		<div className="quadrant__single quadrant__single--4 quadrant__single--landing quadrant__single--image">
			<img src={Image4}/>
		</div>
	</div>
  );
}

export default Landing;
