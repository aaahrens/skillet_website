/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css";
import {Route} from "react-router";
import Header from "./components/Header";
import ContactBody from "./components/bodies/Contact";
import {connect} from "react-redux";
import * as data from "./actions/data.actions";
import {Switch, withRouter} from "react-router-dom";
import * as state from "./actions/state.actions";
import Home from "./components/bodies/Home";
import MenuBody from "./components/bodies/Menu";
import LocationBody from "./components/bodies/Location";
import Footer from "./components/Footer";

class Routes extends React.Component {

	constructor(props) {
		super(props);
		this.props.getMenu();
		this.props.getGallery();
		this.props.select(props.location.pathname.replace("/", ''))
	}

	componentWillReceiveProps(nextProps) {
		this.props.select(nextProps.location.pathname.replace("/", ''))
	}

	render() {
		return (
			<div className="screen">
				<div className="mask"/>

				<Route path="/" component={Header}/>
				<div id="body">
					<Switch>
						<Route path="/contact" component={ContactBody}/>
						<Route path="/location" component={LocationBody}/>
						<Route path="/menu" component={MenuBody}/>
						<Route path="/" component={Home}/>
					</Switch>
					<Footer/>
				</div>
			</div>
		)
	}
}


export default withRouter(connect(
	(state) => ({}),
	(dispatch) => ({
		getMenu: () => dispatch(data.getMenu()),
		getGallery: () => dispatch(data.getGallery()),
		select: (name) => dispatch(state.selectTab(name))

	})
)(Routes))