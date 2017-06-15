/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Card from "../Card";

const About = (props) => {


	return (
		<div id="body">
			<Card text={props.text}/>
		</div>
	)
};


export default connect(
	(state) => ({
		text: state.data.placeHolder
	}),
	(dispatch) => ({})
)(About)