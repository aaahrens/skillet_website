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
				8776 Lakewood Dr <br/>
				Windsor, CA 95492
			</div>
			<div id="footer-line">
				707-657-7599<br/>
				test@yahoo.com
			</div>
			<div id="footer-line">
				Skillets Cafe<br/>
				2017, all rights reserved.
			</div>
		</div>
	)
};


export default withRouter(connect(
	(state) => ({}),
	(dispatch) => ({})
)(Footer))

