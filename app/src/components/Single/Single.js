import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
import EventSingle from '../Calendar/Views/EventSingle';
import SingleImageList from './SingleImageList';
import SingleContent from './SingleContent';
import SingleSidebar from './SingleSidebar';
import SinglePrevNext from './SinglePrevNext';
import Loading from '../Loading/Loading';
import ArrowSVG from '../../images/back-arrow.svg';
import $ from 'jquery'

class Single extends Component {
	_scrollToEvents(){
		// check if event query string
		if(/[?&]event=/.test(location.search)){
			const eventHeader = document.getElementById('event-header');
			if(this.eventsList.length > 0 && (typeof(eventHeader) != 'undefined' && eventHeader != null)){
				$(".gradient__content").animate({ scrollTop: $('#event-header').offset().top - 32 });
			}
		}
	}
	componentDidMount(){
		this._scrollToEvents();
	}
	componentDidUpdate(){
		// this._scrollToEvents();
	}
	render(){
		const { params, buildings, events } = this.props;
		
		if(buildings.length === 0 && events.length === 0){return <Loading/>}

		const { id } = params;
		const extraneous = 'october-';
		const day = id.replace(extraneous, '');

		// search for single building
		const building = buildings.find(building => building.acf.day_of_the_month === day);
		const { address, date, description, images, architect, building_of_the_day_title  } = building.acf;

		// get events for the day
		this.eventsList = events
			.filter(event => event.acf.building_of_the_day === building.id)
			.map(event => <EventSingle classStyle={'card--single'} event={event} />)

		return (
			<div>
				<Logo header={`October ${day}`}/>
				<div className="title__header content__single-header content__single-header--mobile">Building of the Day</div>
				<main className="grid grid--single">
					<SingleSidebar date={date} address={address} time="10:00AM" />
					<SingleContent title={building_of_the_day_title} architect={architect} description={description} />
					<SingleImageList images={images}/>
				</main>
				<div className="grid grid--events" id="event-header">
					<h3 className="logo__header title__header logo__header--events">{ this.eventsList.length > 0 ? 'Events' : '' }</h3>
					<div className="cards__container cards__container--events">
						{this.eventsList}
					</div>
				</div>
				<SinglePrevNext day={day} />
				<Link to="/calendar" className="single__nav-calendar title__header">
					<img className="single-nav__arrow" style={{paddingRight: 6}} src={ArrowSVG} />Calendar
				</Link>
			</div>
		)
	}
}

export default Single;
