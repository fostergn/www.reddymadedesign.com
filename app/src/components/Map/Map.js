import React, { Component } from 'react';
import Marker from './Marker';
import MarkerPartners from './MarkerPartners';
import classNames from 'classnames'
import mapStyles from '../../settings/mapStyles';

window.googleMapWindows = [];

class Map extends Component {
    componentDidMount() {
			window.map = new window.google.maps.Map(document.getElementById('google-map'), {
				center: {lat: 40.720378, lng: -73.970208},
				zoom: 13,
				disableDefaultUI: true,
				styles: mapStyles,
			});
			this.props.mapLoaded();
			window.google.maps.event.trigger(window.map, 'resize');
			
			window.map.addListener('click', () => {
				window.googleMapWindows.map(el => el.infoWindow.close(window.map, el.marker));
			});
    }

		componentDidUpdate() {
			let center = window.map.getCenter();
			window.google.maps.event.trigger(window.map, 'resize');
    	window.map.setCenter(center); 
		}

    render () {
			const { buildingsView, isMapLoaded, buildings, partners, mapFilters } = this.props;

			const markerList = isMapLoaded ? buildings
							.filter(building => mapFilters.includes('buildings') || mapFilters.length === 0)
							.map(building => <Marker key={building.title.rendered} building={building} windows={window.googleMapWindows}/>) : <div></div>;
			
			const markerPartnersList = isMapLoaded ? partners
							.filter(partner => mapFilters.includes(partner.acf.type) || mapFilters.length === 0)
							.map(partner => <MarkerPartners key={partner.title.rendered} partner={partner} windows={window.googleMapWindows}/>) : <div></div>;

			const mapClass = classNames({
				'google-map--hidden' : buildingsView !== 'map',
			})
			
			return (
				<div className={mapClass}>
					<div id="google-map" style={{visibility: buildingsView === 'map' ? 'visible' : 'hidden'}} ></div>
					{markerList}
					{markerPartnersList}
				</div>
			);
    }
}

export default Map;