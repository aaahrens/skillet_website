/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Card from "../Card";

const Home = (props) => {


	return (
		<div id="body">
			<div id="content">
				<Card text="i am a home body"/>
			</div>
			<Footer />
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Home)