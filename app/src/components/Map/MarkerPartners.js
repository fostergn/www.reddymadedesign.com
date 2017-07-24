import React, { Component } from 'react';
import pinBlue from '../../images/pin_blue_small.png'
import pinRed from '../../images/pin_red_small.png'

class MarkerPartners extends Component {
	constructor() {
		super();
		this.markerElement = {};
	}
	componentWillUnmount() {
		this.markerElement.setMap(null);  
		this.infoWindow = null;   
  }

	componentDidMount() {
		const { partner, windows, type } = this.props;
		const { address_latitude, address_longitude  } = partner.acf;

		this.markerElement = new window.google.maps.Marker({
			position: {
				lat: parseFloat(address_latitude, 10),
				lng: parseFloat(address_longitude, 10)
			},
			title: partner.title.rendered,
			icon: partner.acf.type === 'institutional' ? pinRed : pinBlue,
			map: window.map
		});

		this.infoWindow = new window.google.maps.InfoWindow({
			content: `
				<h3 class="info-window info-window--${partner.acf.type}" style="font-weight:bold"><a href="/${partner.slug}">${partner.title.rendered}</a></h3>
			`
		});

		setTimeout(() => {
			this.markerElement.setMap(window.map);
		})
		
		windows.push({
			infoWindow: this.infoWindow,
			marker: this.markerElement
		})

		this.markerElement.addListener('click', () => {
			window.clearTimeout(window.markerHoverTimeout);
			windows.map(el => el.infoWindow.close(window.map, el.marker));
			this.infoWindow.open(window.map, this.markerElement);
		});
	}

	render(){
		return (
			<div></div>
		);
	}
}

export default MarkerPartners;