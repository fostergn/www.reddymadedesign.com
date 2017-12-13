import React, { Component } from 'react';
import classNames from 'classnames';
import SingleImage from './SmallCarouselSingle';
import { debounce } from 'lodash';

const throttle = debounce;

export default class SingleImageList extends Component {
	constructor(props){
		super(props);
		this.imagesTotal = this.props.images.length;
		this.state = {
			imageCounter: 1,
			forwards: true
		};
		this._nextImage = throttle(this._nextImage, 100);
		this._prevImage = throttle(this._prevImage, 100);
	}
	_nextImage(){
		this.setState({
			imageCounter: this.state.imageCounter === this.imagesTotal ? 1 : this.state.imageCounter + 1,
			forwards: true
		})
	}
	_prevImage(){
		this.setState({
			imageCounter: this.state.imageCounter === 1 ? this.props.images.length : this.state.imageCounter - 1,
			forwards: false
		})
	}
	componentWillUnmount(){
		clearInterval(this.imageTimer);
	}
	render(){

		if (this.props.images.length === 1) {
			return (
				<div className="single__split-right" style={{position:'relative'}}>
					<ul className="gallery__wrapper">
						<p className='gallery__fullscreen' onClick={() => this.props.toggleFullscreen()}>fullscreen</p>
						<div className='gallery__image-wrapper gallery__image-wrapper--active'>
							<p className='gallery__image-caption'></p>
							<img className='gallery__image--bg' src={this.props.images[0].image.sizes.large} />
						</div>
					</ul>
				</div>
			)
		}

		const imageList = this.props.images.map((img, i, array) => {
					if (img.image.sizes) {
						return (
							<SingleImage
								nextImage={this._nextImage}
								key={img.image.sizes.large + i}
								prev={this.state.imageCounter - 2 === (i) || (this.state.imageCounter === 1 && i + 1 === array.length)}
								next={this.state.imageCounter === (i) || (this.state.imageCounter === array.length && i === 0)}
								show={this.state.imageCounter === (i+1)}
								position={i+1}
								total={array.length}
								caption={img.caption}
								img={img.image.url} />
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

		const galleryClasses = classNames({
			'gallery__wrapper': true,
			'forwards': this.state.forwards,
			'backwards': !this.state.forwards
		});

		const targetLeft = window.isTouchDevice ? <div className="carousel__target-left"  onTouchMove={() => this._prevImage() }></div> : <div className="carousel__target-left"  onClick={() => this._prevImage() }></div>;
		const targetRight = window.isTouchDevice ? <div className="carousel__target-right"  onTouchMove={() => this._nextImage() }></div> : <div className="carousel__target-right"  onClick={() => this._nextImage() }></div>;

		return (
			<div className="single__split-right" style={{position:'relative'}}>
				<ul className={galleryClasses}>
					<p className={fullscreenClasses} onClick={() => this.props.toggleFullscreen()}>fullscreen</p>
					{imageList}
				</ul>
				{ targetLeft }
				{ targetRight }
			</div>
		)
	}
}
