import React from "react";
import {connect} from "react-redux";

const Card = (props) => {
	console.log(props.text)
	return (
		<div className="card">
			{props.text}
		</div>
	)
}

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Card)