/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";

const Home = (props) => {


	return (

		<div className="special-container">
			<div className="special-title">
				Specials
			</div>
			<div className="special-items">
				<div className="special-item">
					<div className="title">
						Omlete thats Free and For Me
					</div>
					<div className="price">
						69
					</div>
				</div>
				<div className="description">
					Two Eggs and horshit all thrown together in a
					blender with a brand new newborn. Yum!
				</div>
				<div className="special-item">
					<div className="title">
						Omlete thats Free and For me
					</div>
					<div className="price">
						69
					</div>
				</div>
				<div className="description">
					Two Eggs and horshit all thrown together in a
					blender with a brand new newborn. Yum!
				</div>
				<div className="special-item">
					<div className="title">
						Omlete thats Free and For Me
					</div>
					<div className="price">
						69
					</div>
				</div>
				<div className="description">
					Two Eggs and horshit all thrown together in a
					blender with a brand new newborn. Yum!
				</div>
			</div>
		</div>

	)
};

export default connect(
	(state) => ({
		featuredItems: state.data.featuredItems
	}),
	(dispatch) => ({})
)(Home)