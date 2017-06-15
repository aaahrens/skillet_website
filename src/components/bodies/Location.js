/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Card from "../Card";
const Location = (props) => {


	return (
		<div id="body">
			<div id="location-meta-card">
				<div className="map-container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195.0243085592106!2d-122.80565611736877!3d38.54785188890775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6a6c94f9aa5d3d!2sSkillets+Cafe!5e0!3m2!1sen!2sus!4v1497289403255" width="100%" height="450" />
				</div>
				<div className="location-container">
					<div className="address">
						<text className="font-header-1">1234 Inifity Loop</text>
						<text>Windsor, CA 95494</text>
						<text className="font-header-3">Hours</text>
						<div className="hours">
							<text>Everyday</text>
							<text className="time">6am-3pm</text>
						</div>
					</div>
					<p className="phone-card">(707) 123-4567</p>
				</div>
			</div>
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Location)