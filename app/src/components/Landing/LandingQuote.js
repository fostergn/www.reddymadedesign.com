import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class LandingQuote extends Component {

	constructor(props){
		super(props);
		this.quotesTotal = this.props.quotes.length;
		this.state = {
			quoteCounter: 1
		};
	}
	_incrementCounter(){
		this.opacityTimer = setInterval(() => {
			this._nextQuote();
		}, 6000)
	}
	_nextQuote(){
		this.setState({
			quoteCounter: this.state.quoteCounter === this.quotesTotal ? 1 : this.state.quoteCounter + 1
		})
	}
	componentDidMount(){
		this._incrementCounter();
	}
	componentWillUnmount(){
		clearInterval(this.opacityTimer);
	}

	render() {

		const { index, quotes, features } = this.props;

		const landing_quotes = quotes.map(quote => features.find(feature => feature.id === quote.news_item.ID));

		const quoteList = landing_quotes.map((quote, index) => {

			const classes = classNames({
				'quadrant__quote-container': true,
				[`quadrant__quote-container--${index + 1}`]: true,
				'quadrant__quote-container--active': index + 1 === this.state.quoteCounter
			});

			return (
				<div className={classes}>
					<p className="quadrant__quote">
						{quote.acf.summary}
						<a style={{display:'block'}} target="_blank" href={quotes[index].news_item_link} className="read-more">Read More</a>
					</p>
				</div>
			);
		});

	  return (
			<div className={`quadrant__single quadrant__single--${index} quadrant__single--landing quadrant__single--quote`}>
				{quoteList}
			</div>
	  );
	}
}
