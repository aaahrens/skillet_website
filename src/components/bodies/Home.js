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
import img1 from './EX3i8.jpg'
import img2 from './about-image.png'

const Home = (props) => {

	return (
		<div id="body">
			<div className="home-body">



			</div>
			<div>
				hello
			</div>
			<Footer />
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Home)