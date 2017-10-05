import React, { Component } from 'react';
import classNames from 'classnames';
import SingleImage from './SmallCarouselSingle';
import { throttle } from 'lodash';

export default class SingleImageList extends Component {
	constructor(props){
		super(props);
		this.imagesTotal = this.props.images.length;
		this.state = {
			imageCounter: 1,
			forwards: true
		};
		this._nextImage = throttle(this._nextImage, 800);
		this._prevImage = throttle(this._prevImage, 800);
	}
	_incrementCounter(){
		this.imageTimer = setInterval(() => {
			this._nextImage();
		}, 6000)
	}
	_nextImage(){
		// throttle(() => {
			this.setState({
				imageCounter: this.state.imageCounter === this.imagesTotal ? 1 : this.state.imageCounter + 1,
				forwards: true
			})
		// }, 1000);
	}
	_prevImage(){
		// throttle(() => {
			this.setState({
				imageCounter: this.state.imageCounter === 1 ? this.props.images.length : this.state.imageCounter - 1,
				forwards: false
			})
		// }, 1000);
	}
	componentDidMount(){
		this._incrementCounter();
	}
	componentWillUnmount(){
		clearInterval(this.imageTimer);
	}
	render(){
		const imageList = this.props.images.map((img, i, array) => {
					if (img.image.sizes) {
						return (
							<SingleImage
								nextImage={this._nextImage}
								key={img.image.sizes.large}
								prev={this.state.imageCounter - 2 === (i) || (this.state.imageCounter === 1 && i + 1 === array.length)}
								next={this.state.imageCounter === (i) || (this.state.imageCounter === array.length && i === 0)}
								show={this.state.imageCounter === (i+1)}
								position={i+1}
								total={array.length}
								credit={img.image_credit}
								// toggleFullscreen={this.props.toggleFullscreen}
								img={img.image.sizes.large} />
						)
					}
		})

		const handleClick = () => {
			return this._nextImage();
		}

		const fullscreenClasses = classNames({
			'gallery__fullscreen' : true,
			'gallery__fullscreen--hide' : this.state.imageCounter === 1,
		});

		return (
			<div className="single__split-right" style={{position:'relative'}}>
				<ul className="gallery__wrapper" onClick={() => handleClick()}>
					<p className={fullscreenClasses} onClick={() => this.props.toggleFullscreen()}>fullscreen</p>
					{imageList}
				</ul>
				<div className="carousel__target-left"  onClick={() => this._prevImage() }></div>
				<div className="carousel__target-right"  onClick={() => this._nextImage() }></div>
			</div>
		)
	}
}
