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
				<div className="location-container">
					<text>
						hello everybody
					</text>
				</div>
				<div className="location-container">
					<div className="location-address">
						<text className="font-header-1">1234 Inifity Loop</text>
						<p>Windsor, CA 95494</p>
						<text>Everyday</text>
						<text className="float-right">6am-3pm</text>
					</div>
					<div className="location-phone-card">(707) 123-4567</div>
				</div>
			</div>
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Location)