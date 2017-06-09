/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";

const Location = (props) => {


	return (
		<div id="body">
			<div id="content">


			</div>
			<Footer/>
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Location)