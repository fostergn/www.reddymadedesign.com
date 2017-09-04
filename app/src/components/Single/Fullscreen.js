import React, { Component } from 'react';
import FullscreenSingle from './FullscreenSingle';

export default class Fullscreen extends Component {
	constructor(props){
		super(props);
		this.imagesTotal = this.props.images.length;
		this.state = {imageCounter: 1};
	}
	_incrementCounter(){
		this.imageTimer = setInterval(() => {
			this._nextImage();
		}, 6000)
	}
	_nextImage(){
		this.setState({
			imageCounter: this.state.imageCounter === this.imagesTotal ? 1 : this.state.imageCounter + 1
		})
	}
	_prevImage(){
		this.setState({
			imageCounter: this.state.imageCounter === 1 ? this.props.images.length : this.state.imageCounter - 1
		})
	}
	componentDidMount(){
		this._incrementCounter();
	}
	componentWillUnmount(){
		clearInterval(this.imageTimer);
	}
	render(){
		console.log('is fullscreen:', this.props.isFullscreen);
		if(!this.props.isFullscreen){return null}

		const imageList = this.props.images.map((img, i, array) => {
					if (img.image.sizes) {
						console.log('image: ', img.image.sizes);
						return (
							<FullscreenSingle
								fullscreen={this}
								nextImage={this._nextImage}
								prevImage={this._prevImage}
								key={img.image.sizes.large}
								show={this.state.imageCounter === (i+1)}
								position={i+1}
								total={array.length}
								caption={img.caption}
								toggleFullscreen={this.props.toggleFullscreen}
								img={img.image.sizes.large}
								isLandscape={img.image.sizes['large-width'] > img.image.sizes['large-height']}
							/>
						)
					}
		})

		const handleClick = () => {
			this._nextImage();
		}

		return (
			<ul className="fullscreen__container">
				{imageList}
			</ul>
		)
	}
}
