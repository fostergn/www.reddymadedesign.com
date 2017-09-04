import React, { Component } from 'react';
import FullscreenSingle from './FullscreenSingle';

export default class Fullscreen extends Component {
	constructor(props){
		super(props);
		this.imagesTotal = this.props.images.length;
		this.state = {
			imageCounter: 1,
			forwards: true
		};
	}
	_incrementCounter(){
		this.imageTimer = setInterval(() => {
			this._nextImage();
		}, 6000)
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
	componentDidMount(){
		this._incrementCounter();
	}
	componentWillUnmount(){
		clearInterval(this.imageTimer);
	}
	render(){

		if(!this.props.isFullscreen){return null}

		console.log('this state : ', this.state.forwards);

		const imageList = this.props.images.map((img, i, array) => {
					if (img.image.sizes) {
						return (
							<FullscreenSingle
								fullscreen={this}
								nextImage={this._nextImage}
								prevImage={this._prevImage}
								key={img.image.sizes.large}
								forwards={this.state.forwards}
								prev={this.state.forwards ? (this.state.imageCounter - 2 === (i) || (this.state.imageCounter === 1 && i + 1 === array.length)) : (this.state.imageCounter === (i) || (this.state.imageCounter === array.length && i === 0))}
								next={this.state.forwards ? (this.state.imageCounter === (i) || (this.state.imageCounter === array.length && i === 0)) : (this.state.imageCounter - 2 === (i) || (this.state.imageCounter === 1 && i + 1 === array.length))}
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
				<div className="fullscreen__controls">
					<div className="fullscreen__left-control">{this.props.images[this.state.imageCounter - 1].caption}</div>
					<div className="">{this.state.imageCounter} / {this.props.images.length}</div>
					<div className="fullscreen__right-control" onClick={() => this.props.toggleFullscreen()}>Close</div>
				</div>
			</ul>
		)
	}
}
