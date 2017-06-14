import React from 'react'
import {connect} from "react-redux";

const Carousel = (props) => {
	let index = 0,
		images = props.data;
	this.container = () => {
		return (
			<div className="inner">
				<img />
				<img />
				<img />
				<img />
			</div>
		)
	};
	this.increment = () => {
		index += 1;
		if (index >= images.length)
			index = 0;
		this.update();
	};
	this.decrement = () => {
		index -= 1;
		if (index < 0)
			index = images.length -1;
		this.update();
	};
	this.update = () => {
	};
	return (
		<div className="carousel">
			{this.container()}
			<div onClick={this.increment} className="prev" />
			<div onClick={this.decrement} className="next" />
		</div>
	)
}

export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(Carousel)