import React from "react";
import {connect} from "react-redux";

const SectionCard = (props) => {
	return (
		<div className="section">{props.value}</div>
	)
}

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(SectionCard)