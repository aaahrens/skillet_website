import React from "react";
import {connect} from "react-redux";

const Card = (props) => {
	this.render = () => {
		if (props.valueImage !== undefined)
			return <img src={props.valueImage} />;
		else if (props.value !== undefined)
			return props.value;
		else
			return "";
	}
	var classes = "card " + props.className;
	return (
		<div id={props.id} className={classes}>
			{this.render()}
			{props.children}
		</div>
	)
}

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Card)