//AIzaSyB1Q4tESqb5FLjofJP8hRRcQUOOUh483q4
import React, { Component } from 'react';
import MapStyles from './MapStyles';

class Map extends Component {
    componentDidMount() {
			window.map = new window.google.maps.Map(document.getElementById('google-map'), {
				center: {lat: 40.729636, lng: -73.998915},
				zoom: 15,
				disableDefaultUI: true,
				styles: MapStyles
			});

			  var marker = new window.google.maps.Marker({
			    position: {
			    	lat: 40.729651143471,
			    	lng: -73.9989151350413,
			    },
			    map: window.map,
			    title: 'Reddymade Design'
			  });

			window.google.maps.event.trigger(window.map, 'resize');
    }

		componentDidUpdate() {
			let center = window.map.getCenter();
			window.google.maps.event.trigger(window.map, 'resize');
    		window.map.setCenter(center);
		}

    render () {

			return (
				<div style={{marginTop: 30}} id="google-map"></div>
			);
    }
}

export default Map;
