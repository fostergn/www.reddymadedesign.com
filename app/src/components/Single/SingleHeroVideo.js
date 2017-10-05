import React, {Component} from 'react';
import $ from 'jquery';

export default class SingleHeroVideo extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var timeoutId;
		var $videoBgAspect = $(".videobg-aspect");
		var $videoBgWidth = $(".videobg-width");
		var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

		function videobgEnlarge() {
		  var windowAspect = ($(window).height() / $(window).width());
		  if (windowAspect > videoAspect) {
		    $videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
		  } else {
		    $videoBgWidth.width(100 + "%")
		  }
		}

		$(window).resize(function() {
		  clearTimeout(timeoutId);
		  timeoutId = setTimeout(videobgEnlarge, 100);
		});

		$(function() {
		  videobgEnlarge();
		});
	}

	render() {

		const {heroVideo} = this.props;

		const videoId = heroVideo.substr(heroVideo.lastIndexOf('/') + 1)

	  return (
		<div className="single__hero">
			<div className="videobg">
			  <div className="videobg-width">
			    <div className="videobg-aspect">
			      <div className="videobg-make-height">
			        <div className="videobg-hide-controls">
			            <iframe src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&title=0&byline=0&portrait=0`} frameBorder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	  );
	}
}
