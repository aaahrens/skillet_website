/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import * as data from "../actions/data.actions";
const Header = (props) => {


	return (
		<div className="header-background">
			<div className="header">
				<a className="header-logo" onClick={() => props.goHome()}>

				</a>
				<a className="header-item" onClick={() => props.goMenu()}>
					Menu
				</a>
				<a className="header-item" onClick={() => props.goLocation()}>
					Location
				</a>
				<a className="header-item" onClick={() => {}}>
					Gallery
				</a>
				<a className="header-item" onClick={() => props.goContact()}>
					Contact
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
		goContact: () => dispatch(push("/contact")),
		getMenu: () => dispatch(data.getMenu())
	})
)(Header)

