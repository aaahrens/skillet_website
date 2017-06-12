/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Carousel from "../Carousel";

const Home = (props) => {

	return (
		<div id="body">
			<Carousel data={[]} />
			<Footer />
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Home)