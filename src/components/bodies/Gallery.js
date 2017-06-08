/**
 * Created by drunkengranite on 6/8/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";

const Gallery = (props) => {


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
)(Gallery)