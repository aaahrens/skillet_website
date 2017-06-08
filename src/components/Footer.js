/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const Footer = (props) => {

	return (
		<div id="footer">
			<div id="footer-line">
				8776 Lakewood Dr <br />
				Windsor, CA 95492
			</div>
			<div id="footer-line">
				(888)-888-9999  <br/>
				dicknuggets@mgee.com
			</div>
			<div id="footer-line">
				copyright this logo and shit <br />
				skillets has no other locations
			</div>
		</div>
	)
};


export default withRouter(connect(
	(state) => ({}),
	(dispatch) => ({})
)(Footer))

