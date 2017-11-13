import React, { Component } from 'react';
import FullscreenSingle from './FullscreenSingle';
import { throttle } from 'lodash';
import classNames from 'classnames';

export default class Fullscreen extends Component {
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
	_nextImage(){
		console.log('next image');
		this.setState({
			imageCounter: this.state.imageCounter === this.imagesTotal ? 1 : this.state.imageCounter + 1,
			forwards: true
		})
	}
	_prevImage(){
		console.log('previous image');
		this.setState({
			imageCounter: this.state.imageCounter === 1 ? this.props.images.length : this.state.imageCounter - 1,
			forwards: false
		})
	}
	componentWillUnmount(){
		clearInterval(this.imageTimer);
	}
	render(){

		console.log('this.state.imageCounter: ', this.state.imageCounter);

		if(!this.props.isFullscreen){return null}

		if(this.props.images.length === 1){

			const imageClasses = classNames({
				'fullscreen__image' : true,
				'fullscreen__image--bg' : this.props.images[0].image.sizes['large-width'] > this.props.images[0].image.sizes['large-height'],
			});

			return (
				<ul className="fullscreen__container">
					<div className="fullscreen__image-wrapper fullscreen__image-wrapper--active">
						<div className="fullscreen__image-content">
							<img className={imageClasses} src={this.props.images[0].image.sizes.large} />
						</div>
					</div>
					<div className="fullscreen__controls">
						<div className="fullscreen__left-control">{this.props.images[this.state.imageCounter - 1].caption}</div>
						<div className="">{this.state.imageCounter} / {this.props.images.length}</div>
						<div className="fullscreen__right-control" onClick={() => this.props.toggleFullscreen()}>Close</div>
					</div>
				</ul>
			)
		}

		const imageList = this.props.images.map((img, i, array) => {
					if (img.image.sizes) {
						return (
							<FullscreenSingle
								fullscreen={this}
								nextImage={this._nextImage}
								prevImage={this._prevImage}
								key={img.image.sizes.large + i}
								forwards={this.state.forwards}
								prev={this.state.imageCounter - 2 === (i) || (this.state.imageCounter === 1 && i + 1 === array.length)}
								next={this.state.imageCounter === (i) || (this.state.imageCounter === array.length && i === 0)}
								show={this.state.imageCounter === (i+1)}
								position={i+1}
								total={array.length}
								caption={img.caption}
								toggleFullscreen={this.props.toggleFullscreen}
								img={img.image.url}
								isLandscape={img.image.sizes['large-width'] > img.image.sizes['large-height']}
							/>
						)
					}
		})

		const containerClasses = classNames({
			'fullscreen__container': true,
			'forwards': this.state.forwards,
			'backwards': !this.state.forwards
		});

		return (
			<ul className={containerClasses}>
				{imageList}
				<div className="fullscreen__controls">
					<div className="fullscreen__left-control">{this.props.images[this.state.imageCounter - 1].caption}</div>
					<div className="">{this.state.imageCounter} / {this.props.images.length}</div>
					<div className="fullscreen__right-control" onClick={() => this.props.toggleFullscreen()}>Close</div>
				</div>
				<div className="fullscreen__target-left"  onClick={() => this._prevImage() }></div>
				<div className="fullscreen__target-right"  onClick={() => this._nextImage() }></div>
			</ul>
		)
	}
}
