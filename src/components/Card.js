import React from "react";
import {connect} from "react-redux";

const Card = (props) => {
	return (
		<div className="card">
			<text>{props.text}</text>
		</div>
	)
}

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Card)