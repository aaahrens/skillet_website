/**
 * Created by drunkengranite on 7/9/17.
 */
import React from "react";
import {connect} from "react-redux";


const ContactBody = (props) => {


	return (
		<div>
			<div className="phone-number">
				707-666-6666s
			</div>
			<div className="email">
				dicknuggets@mcgee.com
			</div>
			<div className="address">

			</div>
		</div>
	)
}


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(ContactBody)

