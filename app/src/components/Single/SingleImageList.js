import React, { Component } from 'react';
import SingleImage from './SingleImage';
import { max } from 'underscore';

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
		// this._incrementCounter();
	}
	componentWillUnmount(){
		// clearInterval(this.imageTimer);
	}
	render(){
		const imageList = this.props.images.map((img, i, array) => (
						<SingleImage 
							nextImage={this._nextImage}
							key={img.image.sizes.large} 
							show={this.state.imageCounter === (i+1)} 
							position={i+1} 
							total={array.length} 
							credit={img.image_credit} 
							img={img.image.sizes.large} />)
			)
		
		const imageLargest = max(this.props.images, img => img.image.sizes['large-height'] / img.image.sizes['large-width']);

		const handleClick = () => {
			// clearInterval(this.imageTimer);
			this._nextImage();
			// this._incrementCounter()
		}

		return (
			<ul className="gallery__wrapper" onClick={() => handleClick()}>
				<div className="gallery__stub">
					<img 
						className="gallery__image-stub"
						key={imageLargest.image.sizes.large} 
						src={imageLargest.image.sizes.large} />
					<div className="gallery__image-figure">
						<p className="gallery__image-counter">1/1</p>
						<p className="gallery__image-credit">Image credit:</p>
					</div>
				</div>
				{imageList}
			</ul>
		)
	}
}
