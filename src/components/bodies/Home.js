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
import MenuItem from '../MenuItem';

const Home = (props) => {
	this.renderTopItemsList = () => {
		return (
			props.featuredItems.map(function(item) {
				return (
					<MenuItem item={item} />
				)
			})
		)
	};

	return (
		<div id="body">
			<Card text="carousel here" />
			<div className="section">
				Featured Menu Items
			</div>
			<div id="top-menu-list">
				{this.renderTopItemsList()}
			</div>
			<Footer />
		</div>
	)
};


export default connect(
	(state) => ({
		featuredItems: state.data.featuredItems
	}),
	(dispatch) => ({})
)(Home)