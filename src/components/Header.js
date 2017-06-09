/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import image from "../logo-1.png";
import * as data from "../actions/data.actions";
const Header = (props) => {


	return (
		<div className="header">
			<a onClick={() => props.goHome()} id="logo-container">
				<img src={image} className="logo">

				</img>
			</a>
			<div id="button-container">
				<a className="menu-button" onClick={() => props.goLocation()} data={"location" === props.currentTab}>
					Location
				</a>
				<a className="menu-button" onClick={() => props.goMenu()} data={"menu" === props.currentTab}>
					Menu
				</a>
				<div className="menu-button" placeholder="true">
				</div>
				<a className="menu-button" onClick={() => props.goAbout()} data={"about" === props.currentTab}>
					About
				</a>
				<a className="menu-button" onClick={() => props.goGallery()} data={"gallery" === props.currentTab}>
					Gallery
				</a>
			</div>
		</div>
	)
};


export default connect(
	(state) => ({
		currentTab: state.state.currentTab
	}),
	(dispatch) => ({
		goAbout: () => dispatch(push("/about")),
		goMenu: () => dispatch(push("/menu")),
		goLocation: () => dispatch(push("/location")),
		goHome: () => dispatch(push("/")),
		goGallery: () => dispatch(push("/gallery")),
		getMenu: () => dispatch(data.getMenu())
	})
)(Header)

