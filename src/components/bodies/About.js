/**
 * Created by drunkengranite on 7/9/17.
 */
import React from "react";
import {connect} from "react-redux";


const AboutBody = (props) => {


	return (
		<div className="container about-container">
			<iframe src="https://docs.google.com/document/d/e/2PACX-1vT5efz6CGzbhxaHAcKGee2CaXP2fuxzeM65-xaqCSFd1aCWjndT9n0T65uJwd7UMAyInwXBRAbOu5r3/pub?embedded=true">

			</iframe>
		</div>
	)
}


export default connect(
	(state) => ({
		text: state.data.aboutText,
	}),
	(dispatch) => ({})
)(AboutBody)

