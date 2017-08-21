import React, { Component } from 'react';
import SingleImage from './SmallCarouselSingle';

export default class SingleImageList extends Component {
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
								show={this.state.imageCounter === (i+1)}
								position={i+1}
								total={array.length}
								credit={img.image_credit}
								toggleFullscreen={this.props.toggleFullscreen}
								img={img.image.sizes.large} />
						)
					}
		})

		const handleClick = () => {
			return this._nextImage();
		}

		return (
			<div className="single__split-right">
				<ul className="gallery__wrapper" onClick={() => handleClick()}>
					{imageList}
				</ul>
			</div>
		)
	}
}
