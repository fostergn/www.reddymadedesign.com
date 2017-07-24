import React, { Component } from 'react';
import jQuery from 'jquery';
import pinOrange from '../../images/pin_orange_small.png'

class Marker extends Component {
	constructor() {
		super();
		this.markerElement = {};
	}
	componentWillUnmount() {
		this.markerElement.setMap(null);  
		// this.markerElement = null; 
		this.infoWindow = null;   
  }

	componentDidMount() {
		const { building, windows, type } = this.props;
		const { building_of_the_day_title, address_latitude, address_longitude  } = building.acf;
		
		this.markerElement = new window.google.maps.Marker({
			position: {
				lat: parseFloat(address_latitude, 10),
				lng: parseFloat(address_longitude, 10)
			},
			maxWidth: 0,
			title: building.name,
			icon: pinOrange,
			map: window.map
		});
		// this.infoWindow = new window.google.maps.InfoWindow({
		// 	content: `
		// 		<h3 style="font-weight:bold"><a href="/${building.slug}">${building_of_the_day_title}</a></h3>
		// 		<p>${description}</p>
		// 	`
		// });
		this.infoWindow = new window.google.maps.InfoWindow({
			content: `
				<h3 class="info-window info-window--building" style="font-weight:bold"><a href="/${building.slug}">${building_of_the_day_title}</a></h3>
			`
		});

		setTimeout(() => {
			this.markerElement.setMap(window.map);
			window.google.maps.event.addListener(this.infoWindow,'domready',function(){ 
			jQuery('.info-window')//the root of the content
				.closest('.gm-style-iw')
					.parent().addClass('custom-iw');
			});
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

export default Marker;