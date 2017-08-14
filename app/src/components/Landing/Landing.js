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
	<div className="grid grid--36">
		<p className="grid--landing-text">A leader in today's global design culture, Reddymade Architecture and Design was founded by Suchi Reddy in 2002. Since its inception the firm has been lauded for its formal experimentation, its imaginative use of color and passion for innovative materials.</p>
		<div className="grid grid--36 grid--landing">

			<div className="grid__column grid__column--landing grid__column--7">
				<div className="grid__item grid__item--landing">
					<img src={Image1} alt=""/>
				</div>
				<div className="grid__item grid__item--landing">
					<img src={Image2} alt=""/>
				</div>
			</div>

			<div className="grid__column grid__column--landing grid__column--7">
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image3} alt=""/>
					</a>
				</div>
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image4} alt=""/>
					</a>
				</div>
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image5} alt=""/>
					</a>
				</div>
			</div>

			<div className="grid__column grid__column--landing grid__column--10">
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image6} alt=""/>
					</a>
				</div>
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image7} alt=""/>
					</a>
				</div>
			</div>

			<div className="grid__column grid__column--landing grid__column--4">
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image8} alt=""/>
					</a>
				</div>
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image9} alt=""/>
					</a>
				</div>
			</div>

			<div className="grid__column grid__column--landing grid__column--2">
				<div className="grid__item grid__item--landing">
					<a href="/">
						<img src={Image10} alt=""/>
					</a>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Landing;
